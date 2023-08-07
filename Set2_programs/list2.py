list=[12, 75, 150, 180, 145, 525, 50]

for i in list:
    if i%5==0 :
        if i>150:
            continue
        else:
            if i>500:
                break
        
            print(i)