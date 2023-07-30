import csv
import argparse

parser = argparse.ArgumentParser()

parser.add_argument('-r', '--row', type=int, default=1)
parser.add_argument('-f', '--file', type=str, default="teams.csv")

args = parser.parse_args()

with open(args.file, newline='') as csvfile:
    reader = csv.reader(csvfile)
    for row in reader:
        print("| Player | " + row[args.row] + " |")

