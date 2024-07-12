#!/usr/bin/python3
"""
- Python script that:
- takes in a letter
- sends POST request to http://0.0.0.0:5000/search_user
- with the letter as a parameter.
"""
import sys
import requests


if __name__ == "__main__":
    q = "" if len(sys.argv) == 1 else sys.argv[1]
    url = "http://0.0.0.0:5000/search_user"
    data = {"q": q}

    response = requests.post(url, data=data)
    try:
        json_response = response.json()
        if json_response == {}:
            print("No result")
        else:
            print("[{}] {}".format(response.get("id"), response.get("name")))
    except ValueError:
        print("Not a valid JSON")
