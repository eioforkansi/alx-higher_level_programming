#!/usr/bin/python3
"""
- Python script that takes in a URL
- Sends a request to the URL
_ Displays the value of the variable X-Request-Id in the response header
"""
import sys
import requests


if __name__ == "__main__":
    url = sys.argv[1]

    response = requests.get(url)
    print(response.headers.get("X-Request-Id"))
