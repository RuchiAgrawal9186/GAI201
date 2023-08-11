for i in range(1,101):
    if(i%3==0):
        print(f"Fizz",end=" ")
    elif(i%5==0):
        print(f"Buzz",end=" ")
    elif(i%5==0 and i%3==0):
        print(f"Fizz Buzz",end=" ")
    else:
        print(f"{i}",end=" ")