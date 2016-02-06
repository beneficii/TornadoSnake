from string import ascii_letters, digits
from random import choice,randint

map_width = 40
map_height = 40

snakes = {}


class Snake:
    def __init__(self, x, y, key):
        self.x = x
        self.y = y
        self.dir = 'd'  # wasd direction
        self.public_key = key

    def change_direction(self, direction):
        self.dir = direction

    def get_data(self):
        return self.public_key, {'x':self.x, 'y':self.y}

    def move(self):
        self.x += {'a':-1, 'd':1}.get(self.dir, 0)
        self.y += {'w':-1, 's':1}.get(self.dir, 0)
        if self.x < 0:
            self.x = map_width - 1
        elif self.x >= map_width:
            self.x = 0
        if self.y < 0:
            self.y = map_height - 1
        elif self.y >= map_height:
            self.y = 0


def new_snake(private_key):
    snake = Snake(randint(0, map_width-1), randint(0, map_height-1), generate_key())
    snakes[private_key] = snake


def remove_snake(private_key):
    del snakes[private_key]


def move_snakes():
    for snake in snakes.values():
        snake.move()


def change_snake_direction(private_key, direction):
    snakes[private_key].change_direction(direction)


def generate_key(size=4):
    return ''.join(choice(ascii_letters+digits) for _ in xrange(size))


def generate_json():
    json = {}
    for snake in snakes.values():
        key, data = snake.get_data()
        json[key] = data
    return json