#!/usr/bin/env python3
import MySQLdb
import sys

def list_states(username, password, database):
    # Connect to MySQL
    try:
        db = MySQLdb.connect(host='localhost', port=3306, user=username, passwd=password, db=database)
        cursor = db.cursor()

        # Execute the query
        query = "SELECT * FROM states ORDER BY id ASC"
        cursor.execute(query)

        # Fetch all rows
        states = cursor.fetchall()

        # Print results
        for state in states:
            print(state)

        # Close cursor and connection
        cursor.close()
        db.close()

    except MySQLdb.Error as e:
        print(f"Error connecting to MySQL: {e}")
        sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("Usage: python script.py <username> <password> <database>")
            sys.exit(1)

    username = sys.argv[1]
    password = sys.argv[2]
    database = sys.argv[3]

    list_states(username, password, database)

