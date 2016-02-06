from tornado import websocket
from snakes import new_snake, change_snake_direction, generate_json, remove_snake, move_snakes
from uuid import uuid4

connections = set()


def send_to_all():
    move_snakes()
    json = generate_json()
    for con in connections:
        con.write_message(json)


class WSHandler(websocket.WebSocketHandler):

    def open(self):
        connections.add(self)
        self.id = uuid4()
        new_snake(self.id)
        print "new connection!"

    def on_message(self, message):
        change_snake_direction(self.id, message)

    def on_close(self):
        remove_snake(self.id)
        connections.remove(self)
        print "connection closed!"

    def check_origin(self, origin):
        return True