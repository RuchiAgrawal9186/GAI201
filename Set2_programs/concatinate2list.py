list1 = ["M", "na", "i", "Ke"]
list2 = ["y", "me", "s", "lly"]

list3 = [x + y for x, y in zip(list1, list2)]
print(list3)