# -*- coding: utf-8 -*-
"""
Created on 08/26/17 14:03:55

サーバに色のリストをぶん投げる

@author: eqs
"""

import sys
import requests
import json
import time

url = 'http://localhost:3001/api/color'
data = {'colors' : ['#FF0000', '#00FF00', '#0000FF', '#000000']}
headers = {'Accept' : 'application/json', 'Content-type' : 'application/json'}

for k in range(100):
    res = requests.post(url, data=json.dumps(data), headers=headers)
    print('{0:3d} {1}'.format(k, res))
    time.sleep(0.1)
