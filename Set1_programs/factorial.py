n=int(input("enter a number :"))

def facto (n) :
    p=1
    for i in range(1,n+1):
        p*=i
    return p

value=facto(n)
print("factorial of",n, "is" , value)