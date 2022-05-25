#!/usr/bin/python3
"""This function prints text and makes a line break after these characters"""


def text_indentation(text):
    """
    Function that allows to make a line break when ignoring the characters
    """
    if (type(text) is not str):
        raise TypeError("text must be a string")

    flag = 0
    for x in text:
        if (x == '.' or x == '?' or x == ':'):
            flag = 1
            print(x)
            print()
        else:
            if (flag != 1):
                print(x, end='')
            flag = 0
