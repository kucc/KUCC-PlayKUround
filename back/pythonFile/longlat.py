import requests
import pandas as pd

data = pd.read_csv("./sorted_playkuround.csv")
for i in range(data.shape[0]):
    searching = data['이름'].iloc[i]
    url = 'https://dapi.kakao.com/v2/local/search/keyword.json?x=37.588194705681&y=127.03402453668&query={}'.format(searching)
    headers = {
        "Authorization": "KakaoAK ea1128b9fb01a06cc80760f350042441"
    }
    try : 
        data['위도'].iloc[i] = requests.get(url, headers = headers).json()['documents'][0]['y']
        data['경도'].iloc[i] = requests.get(url, headers = headers).json()['documents'][0]['x']
        data['전화번호'].iloc[i] = requests.get(url, headers = headers).json()['documents'][0]['phone']
        data['주소'].iloc[i] = requests.get(url, headers = headers).json()['documents'][0]['address_name']
    except IndexError: 
        pass
data.to_csv("temp_playkuround.csv", mode='w')
