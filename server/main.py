import socket
from tornado import httpserver,web, ioloop
from socket_handler import WSHandler, send_to_all
from thread import start_new_thread
from time import sleep
import threading

application = web.Application([
    (r'/ws', WSHandler),
])

def run_server():
    http_server = httpserver.HTTPServer(application)
    http_server.listen(8888)
    myIP = socket.gethostbyname(socket.gethostname())
    print '*** Websocket Server Started at %s***' % myIP
    ioloop.IOLoop.instance().start()


def loop():
    threading.Timer(1, loop).start()
    send_to_all()

if __name__ == "__main__":
    start_new_thread(run_server, ())
    loop()

