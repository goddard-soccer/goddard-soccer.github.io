import calendar
import datetime

# #################
# calendar
# #################
year = datetime.datetime.now().year
cal = []
for i in range(12):
    cal.append(calendar.monthcalendar(year, i+1))

# #################
# holidays
# #################
memorial = cal[4][-1][0]
if memorial == 0:
    memorial = cal[4][-2][0]

labor = cal[8][0][0]
if labor == 0:
    labor = cal[8][1][0]

# #################
# spring
# #################
spring = []
# april
for w in cal[3]:
    if w[1] != 0:
        spring.append(f"{w[1]}/4/{year},")
    if w[2] != 0:
        spring.append(f"{w[2]}/4/{year},")
# may
for w in cal[4]:
    if w[0] == memorial:
        spring.append("Break,Memorial Day")
        continue
    if w[1] != 0:
        spring.append(f"{w[1]}/5/{year},")
    if w[2] != 0:
        spring.append(f"{w[2]}/5/{year},")
# june
for w in cal[5]:
    if w[1] != 0:
        spring.append(f"{w[1]}/6/{year},")
    if w[2] != 0:
        spring.append(f"{w[2]}/6/{year},")

spring = spring[0:21]
spring.append("Break, Summer Break")

# #################
# fall
# #################
fall = []
# july
for w in cal[6]:
    if 4 in w:
        continue
    if w[1] != 0:
        fall.append(f"{w[1]}/7/{year},")
    if w[2] != 0:
        fall.append(f"{w[2]}/7/{year},")
# august
for w in cal[7]:
    if w[1] != 0:
        fall.append(f"{w[1]}/8/{year},")
    if w[2] != 0:
        fall.append(f"{w[2]}/8/{year},")
# september
for w in cal[8]:
    if w[0] == labor:
        fall.append("Break,Labor Day")
        continue
    if w[1] != 0:
        fall.append(f"{w[1]}/9/{year},")
    if w[2] != 0:
        fall.append(f"{w[2]}/9/{year},")

fall = fall[0:19]

# #################
# teams
# #################
teams = ["Green", "Orange", "Red", "Purple"]
blocks = [
[[0,1,2,3],
 [0,2,1,3],
 [0,3,1,2],],

[[1,0,3,2],
 [2,0,3,1],
 [3,0,2,1],],

[[2,3,0,1],
 [1,3,0,2],
 [1,2,0,3],],

[[3,2,1,0],
 [3,1,2,0],
 [2,1,3,0],]
]
blockOffset = year % len(teams)
lineOffset = 0
teamOffset = year % len(teams)

pairs = []
for a in range(2): # generate 24 pairings, enough for spring/fall
    for i in range(len(blocks)):
        i = (i + blockOffset) % len(teams)
        for j in range(len(blocks[0])):
            j = (j + lineOffset) % len(blocks[0])
            
            t1 = (blocks[i][j][0] + teamOffset) % len(teams)
            t2 = (blocks[i][j][1] + teamOffset) % len(teams)
            t3 = (blocks[i][j][2] + teamOffset) % len(teams)
            t4 = (blocks[i][j][3] + teamOffset) % len(teams)
            
            pairs.append(f"{teams[t1]},{teams[t2]},")
            pairs.append(f"{teams[t3]},{teams[t4]},")
pairs[18] = "Third,Fourth,"
pairs[19] = "First,Second," 

# #################
# combine
# #################
p = 0
for i in range(len(spring)):
    if "Break" in spring[i]:
        continue
    spring[i] = spring[i] + pairs[p]
    p += 1

for i in range(len(fall)):
    if "Break" in fall[i]:
        continue
    fall[i] = fall[i] + pairs[p]
    p += 1

# #################
# print
# #################
# for i in pairs:
#     print(i)
for i in spring:
    print(i)
for i in fall:
    print(i)

