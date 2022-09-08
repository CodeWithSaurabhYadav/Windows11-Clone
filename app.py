import os
from random import randint as rd


for i in range(1,300):
    for j in range(0,rd(0,7)):
        date = str(i) + 'days age'
        with open("file.txt","a") as file:
            file.write("test data\n")
        os.system("git add .")
        os.system('git commit --date="' + date + '" -m "updating the previous changes commits"')