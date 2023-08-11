
with open("f:\MASAI PROJECTS\Python\Learning_Python\Set3_programs\input.txt","r") as file:
    content = file.read()

content = len(content.split(" "))

with open("output.txt","w") as file:
    file.write(f"no of words is {content}")

print(content)
    