import re

teamStr = """

"""

nums = [int(s) for s in re.findall(r'\b\d+\b', teamStr)]
avg = sum(nums) / len(nums)
top = sorted(nums)[-10:]
topavg = sum(top) / len(top)
guests = teamStr.count("Guest")
print(f"Nums: {nums}")
print(f"Top: {top}")
print(f"Length: {len(nums)}")
print(f"Average: {avg:0.2f}")
print(f"Guests: {guests}")

print(f"""
|        | Player Count | {len(nums)} |
|        | Guests Remaining | {4 - guests} |
|        | Average | {avg:0.2f} |
|        | Top 10 | {topavg:0.2f} |
""")

