# -*- coding: utf-8 -*-
"""
Created on 08/26/17 14:03:55

サーバに色のリストをぶん投げる

@author: eqs
"""

import sys
<<<<<<< HEAD
import os
=======
>>>>>>> 72b4419... :fire: Post a pile of JSONs to server :fire:
import requests
import json
import time

<<<<<<< HEAD
os.environ['NO_PROXY'] = 'localhost'

url = 'http://localhost:3001/api/color'
data = {'colors' : ['#E07070', '#70E070', '#7070E0', '#E0E070']}
headers = {'Accept' : 'application/json', 'Content-type' : 'application/json'}

for k in range(50):
    res = requests.post(url, data=json.dumps({'colors' : ['#E07070']}), headers=headers)
    print('{0:3d} {1}'.format(k, res))
    time.sleep(3)

    res = requests.post(url, data=json.dumps({'colors' : ['#7070E0']}), headers=headers)
    print('{0:3d} {1}'.format(k, res))
    time.sleep(3)
=======
url = 'http://localhost:3001/api/color'
data = {'colors' : ['#FF0000', '#00FF00', '#0000FF', '#000000']}
headers = {'Accept' : 'application/json', 'Content-type' : 'application/json'}

for k in range(100):
    res = requests.post(url, data=json.dumps(data), headers=headers)
    print('{0:3d} {1}'.format(k, res))
    time.sleep(0.1)
>>>>>>> 72b4419... :fire: Post a pile of JSONs to server :fire:
