import re

teamStr = """

"""

nums = [int(s) for s in re.findall(r'\b\d+\b', teamStr)]
avg = sum(nums) / len(nums)
guests = teamStr.count("Guest")
print(f"Nums: {nums}")
print(f"Length: {len(nums)}")
print(f"Average: {avg:0.2f}")
print(f"Guests: {guests}")

print()
print(f"""
|        | Player Count | {len(nums)} |
|        | Average | {avg:0.2f} |
|        | Guests Remaining | {4 - guests} |
""")

