#!/usr/bin/python3
def safe_print_list(my_list=[], x=0):
    elem = 0
    try:
        for i in range(x):
            print("{:d}".format(my_list[i]), end="")
            elem += 1
        print()
    except:
        print()
    return elem
