#!/usr/bin/python3

"""Safe version of script #2"""

if __name__ == "__main__":
    from sys import argv
    from sys import exit
    import MySQLdb

    if len(argv) != 5:
        exit(0)

    db = MySQLdb.connect(host="localhost",
                         user=argv[1],
                         passwd=argv[2],
                         db=argv[3],
                         port=3306)
    cur = db.cursor()
    cur.execute("SELECT * FROM states WHERE name = %s", [argv[4]])
    for row in cur.fetchall():
        print(row)

    db.close()
