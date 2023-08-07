tuple1 = (11, [22, 33], 44, 55)

# Convert the inner list to a mutable list
li = list(tuple1)
# print(li)

li[1][0]=222
t2 = tuple(li)
print(t2)
# Modify the value inside the mutable list
 