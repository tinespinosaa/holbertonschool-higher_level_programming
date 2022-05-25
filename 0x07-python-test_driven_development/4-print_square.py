#!/usr/bin/python3
def print_square(size):
    """Prints a square"""
    if type(size) is not int:
        raise TypeError("size must be an integer")
    if size < 0:
        raise ValueError("size must be >= 0")
    if size < 0 and type(size) is float:
        raise TypeError("size must be an integer")
    else:
        for i in range(size):
            print("#" * size)
