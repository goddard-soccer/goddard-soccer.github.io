import csv
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("inputFile", type=str, default="teams.csv")
args = parser.parse_args()

with open(args.inputFile, newline='') as csvfile:
    reader = csv.reader(csvfile)
    rows = list(reader)
    rowHeaders = rows[0]

    nameIndex = rowHeaders.index("Name (First and Last)")
    teamIndex = rowHeaders.index("Previous Team or Preferred Team (not a guarantee, we will try to be accommodating)")
    
    roster = []
    for row in rows:
        team = "Unassigned"
        if "Green" in row[teamIndex]:
            team = "Green"
        elif "Orange" in row[teamIndex]:
            team = "Orange"
        elif "Purple" in row[teamIndex]:
            team = "Purple"
        elif "Red" in row[teamIndex]:
            team = "Red"

        roster.append([row[nameIndex].strip(), team])

    roster.sort(key=lambda x: (x[1], x[0]))

    for r in roster:
        print(f"| Player | {r[0]} | {r[1]} |")
