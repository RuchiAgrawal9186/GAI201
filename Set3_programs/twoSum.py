li=[2, 7, 11, 15]
target = 9
li2=[]
print(len(li))
i=0
j=len(li)-1

while i<j:
    if li[i]+li[j]==target:
        li2.append((i,j))
        print(li2)
        break

    elif li[i]+li[j]<target:
        i+=1
    else:
        j-=1