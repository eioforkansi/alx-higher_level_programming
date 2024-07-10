#!/usr/bin/python3
#!/usr/bin/python3
"""Python script that:
- takes in a URL,
- sends a request to the URL and displays the value
- of the X-Request-Id variable found in the header ofthe response.
"""

import sys
import requests

if __name__ == "__main__":
    url = sys.argv[1]
    data = {"email": sys.argv[2]}

    response = request.post(url, data)
    print(response.text)