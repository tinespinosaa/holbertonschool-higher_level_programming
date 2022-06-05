#!/usr/bin/python3
"""This module adds all arguments to a Python list,
and then save them to a file"""


from os.path import exists
from sys import argv
save_to_json_file = __import__('5-save_to_json_file').save_to_json_file
load_from_json_file = __import__('6-load_from_json_file').load_from_json_file


filename = "add_item.json"
if not exists(filename):
    save_to_json_file([], filename)
my_list = load_from_json_file(filename)
for i in range(1, len(argv)):
    my_list.append(argv[i])

save_to_json_file(my_list, filename)
