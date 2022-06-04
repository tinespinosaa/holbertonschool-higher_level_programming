#!/usr/bin/python3

"""Defining a class MyList that inherit from the list class"""


class MyList(list):
    """Instantiating a method that sort a list in ascending order"""
    def print_sorted(self):
        """Print sorted list"""
        if issubclass(MyList, list):
            print(sorted(self))
