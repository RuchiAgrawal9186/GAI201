n=int(input("enter a number : "))
count=0
for i in range(1,n+1):
    if n%i==0:
        count+=1
if count==2:
    print("its prime")
else:
    print("its not prime")