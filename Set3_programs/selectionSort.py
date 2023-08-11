li=[64, 25, 12, 22, 11]
l2=[]
for i in range(len(li)):
    min=i
    for j in range(i+1,len(li)):
        if li[j]<li[min]:
            min=j
    li[i],li[min] = li[min],li[i]
print(li)
