#!/usr/bin/python3

"""lists all states from the database hbtn_0e_0_usa"""


import MySQLdb
from sys import argv

if __name__ == "__main__":
    user = argv[1]
    password = argv[2]
    database = argv[3]
    compare = argv[4]

    db = MySQLdb.connect(host="localhost",
                         user=user,
                         passwd=password,
                         db=database,
                         port=3306)

    cur = db.cursor()

    cur.execute(
        "SELECT * FROM states WHERE name\
         LIKE '{}' ORDER BY states.id ASC".format(compare))
    rows = cur.fetchall()
    for row in rows:
        print(row)
    cur.close()
    db.close()
