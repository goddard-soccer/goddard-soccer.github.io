import csv

with open('teams.csv', newline='') as csvfile:
    reader = csv.reader(csvfile)
    for row in reader:
        print("| Player | " + row[5] + " |")