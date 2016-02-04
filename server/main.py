import tornado.httpserver
import tornado.websocket
import tornado.ioloop
import tornado.web
import socket
import json
from random import randint


class WSHandler(tornado.websocket.WebSocketHandler):
    connections = set()
    snakes = {}
    def open(self):
        self.connections.add(self)
        print "new connection!"
      
    def on_message(self, message):
        vals = message.split(':')
        if vals[0] == 'd':
            self.snakes[vals[1]] = vals[2];
        elif vals[0] == 'n':
            snake_x = randint(0,39)
            snake_y = randint(0,39)
            self.snakes[vals[1]] = {'x':snake_x, 'y':snake_y}
        self.send_to_all()

    def send_to_all(self):
        for con in self.connections:
            con.write_message(self.snakes)

    def on_close(self):
        self.connections.remove(self)
        print 'connection closed!'
 
    def check_origin(self, origin):
        return True
 
application = tornado.web.Application([
    (r'/ws', WSHandler),
])
 
 
if __name__ == "__main__":
    http_server = tornado.httpserver.HTTPServer(application)
    http_server.listen(8888)
    myIP = socket.gethostbyname(socket.gethostname())
    print '*** Websocket Server Started at %s***' % myIP
    tornado.ioloop.IOLoop.instance().start()