import csv
import argparse
from datetime import datetime

parser = argparse.ArgumentParser()
parser.add_argument("inputFile", type=str, default="teams.csv")
parser.add_argument('-o', '--outputFile', type=str, default="roster.md")
parser.add_argument('-r', '--rating', action='store_true')
args = parser.parse_args()

open(args.outputFile, 'w').close()
f = open(args.outputFile, 'a')

f.write(f"""---
layout: page
title: Rosters
permalink: /{args.outputFile.split(".")[0]}/
---

<div class="row">\n""")

with open(args.inputFile, newline='') as csvfile:
    reader = csv.reader(csvfile)
    rows = list(reader)
    rowHeaders = rows[0]

    nameIndex = rowHeaders.index("Name (First and Last)")
    teamIndex = rowHeaders.index("Previous Team or Preferred Team (not a guarantee, we will try to be accommodating)")
    rateIndex = rowHeaders.index("Self Assessment - How would you rate your playing level? Please answer honestly for balancing purposes, nobody sees this but roster balancers.\n1 - never played before, not an athlete (totally fine!)\n5 - league average, decent touch, decent stamina\n10 - semi professional soccer player")
    guestIndex = rowHeaders.index("Which of the following are you?")

    roster = []
    skipHeaders = True
    for row in rows:
        try:
            datetime.strptime(row[0], '%m/%d/%Y %H:%M:%S')
        except ValueError:
            print(f"Skipped line: {row[0]}")
            continue

        team = "Unassigned"
        if "Green" in row[teamIndex]:
            team = "Green"
        elif "Orange" in row[teamIndex]:
            team = "Orange"
        elif "Purple" in row[teamIndex]:
            team = "Purple"
        elif "Red" in row[teamIndex]:
            team = "Red"
        
        guest = "Guest" in row[guestIndex]

        roster.append([row[nameIndex].strip(), team, int(row[rateIndex].strip()), guest])

    roster.sort(key=lambda x: (x[1], x[0]))

    rosterDict = {}
    for r in roster:
        if r[1] not in rosterDict:
            rosterDict[r[1]] = []
        rosterDict[r[1]].append(r)
    
    for k in rosterDict:
        f.write(f"""
<div class="col-md-3 pb-2">
<div class="card">
<div class="card-header text-center text-white bg-{k.lower()}">{k}</div>
<div class="card-body w-100" markdown=1>

""")
        f.write('| Captain |  |\n')
        f.write('| Co-Captain |  |\n')
        f.write('| ---------- | ---------- |\n')

        guests = 0
        for r in rosterDict[k]:
            if args.rating:
                if r[3]:
                    f.write(f"| Guest  | {r[0]} | {r[2]} |\n")
                    guests += 1
                else:
                    f.write(f"| Player | {r[0]} | {r[2]} |\n")
            else:
                f.write(f"| Player | {r[0]} |\n")

        if args.rating:
            nums = [i[2] for i in rosterDict[k]]
            avg = sum(nums) / len(nums)
            topten = sorted(nums)[-10:]
            toptenavg = sum(topten) / len(topten)
            topfive = sorted(nums)[-5:]
            topfiveavg = sum(topfive) / len(topfive)
            f.write(f"|        | Player Count | {len(nums)} |\n|        | Guests Remaining | {4 - guests} |\n|        | Average | {avg:0.2f} |\n|        | Top 10 | {toptenavg:0.2f} |\n|        | Top 5  | {topfiveavg:0.2f} |")
        
        f.write(f"""

</div>
</div>
</div>
""")

f.write("""
</div>
""")
f.close()
