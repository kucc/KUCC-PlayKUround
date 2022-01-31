import requests

data = pd.read_csv("./sorted_playkuroud.csv")

searching = data.iloc[0]
url = 'https://dapi.kakao.com/v2/local/search/keyword.json?query={}'.format(searching)
headers = {
    "Authorization": "ea1128b9fb01a06cc80760f350042441"
}
places = requests.get(url, headers = headers).json()['documents']
places