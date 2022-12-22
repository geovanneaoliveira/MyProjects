import pandas as pd
import requests
from bs4 import BeautifulSoup

req = requests.get('http://www.flashscore.com/')
if req.status_code == 200:
    print('Requisição bem sucedida!')
    content = req.content
    soup = BeautifulSoup(content, 'html.parser')
