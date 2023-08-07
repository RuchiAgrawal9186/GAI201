str="Hello"
str.lower()
vowel=0
for i in str:
    if i=="a" or i=="e" or i=="i" or i=="o" or i=="u":
        vowel+=1
print("no of vowels",vowel)