import pandas as pd
import numpy as np

data = pd.read_csv("./playkuround.csv")
data.drop_duplicates(subset=None, keep='first', inplace=True, ignore_index=False)

data.to_csv("sorted_playkuround.csv", mode='w')


