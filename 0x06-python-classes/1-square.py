#!/usr/bin/python3
"""creating a class"""


class Square:
    """Defines a square.
    Instantiation with size (no type/value verification)
    Attributes:
        size: private instance.
    """

    def __init__(self, size):
        self.__size = size
