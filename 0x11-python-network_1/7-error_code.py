#!/usr/bin/python3
"""
_ Python script that:
- takes in a URL,
- sends a request to the URL and displays the value
- of the X-Request-Id variable found in the header ofthe response.
"""

import sys
import requests

if __name__ == "__main__":
    url = sys.argv[1]
    try:
        response = requests.get(url)
        if response.status_code>= 400:
            print(f"Error code: {response.status_code}")
        else:
            print(response.text)
    except requests.RequestException as e:
        print(f"Request failed: {e}")
