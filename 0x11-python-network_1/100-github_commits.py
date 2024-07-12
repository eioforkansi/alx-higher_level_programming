#!/usr/bin/python3
"""
- Python script that takes 2 arguments in order to list the 10 most recent commits on a given GitHub repository.
"""
import sys
import requests


if __name__ == "__main__":
    url = "https://api.github.com/repos/{}/{}/commits".format(
        sys.argv[2], sys.argv[1])

    response = requests.get(url)
    commits = response.json()
    try:
        for commit in range(10):
            print("{}: {}".format(
                commits[commit].get("sha"),
                commits[commit].get("commit").get("author").get("name")))
    except IndexError:
        pass
