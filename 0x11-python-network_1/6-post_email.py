#!/usr/bin/python3
"""
- Python script that takes in a URL and an email address
- Sends a POST request to the passed URL with the email as a parameter
_ Finally displays the body of the response.
"""

import sys
import requests

if __name__ == "__main__":
    url = sys.argv[1]
    value = {"email": sys.argv[2]}

    response = requests.post(url, data=value)
    print(response.text)
