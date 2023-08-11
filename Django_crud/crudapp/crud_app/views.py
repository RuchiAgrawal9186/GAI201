from django.shortcuts import render,HttpResponse,redirect
import json
import random
# from .models import Item

# Create your views here.
def index(request):
     return redirect("read")
    #  return render(request,"index.html")
    # return HttpResponse("welcome")
def load_data():
    with open('data.json', 'r') as json_file:
        data = json.load(json_file)
    return data

def save_data(data):
    with open('data.json', 'w') as json_file:
        json.dump(data, json_file, indent=4)

def add(request):
    if request.method == "POST":
        id=random.randint(1, 100)
        name = request.POST.get("name")
        rollno = request.POST.get("rollno")
        course = request.POST.get("course")
        age = request.POST.get("age")
        if name and rollno and course and age:
            data = load_data()
            data["items"].append({"id":id,"name": name,"roll_no":rollno,
            "course":course,
            "age":age})
            save_data(data)
        return redirect("read")
    return render(request, "Addstudent.html")

def read(request):
    data = load_data()
    return render(request, "index.html", {"items": data["items"]})

def update(request,id):
    if request.method == "POST":
        new_name = request.POST.get("name")
        rollno = request.POST.get("rollno")
        course = request.POST.get("course")
        age = request.POST.get("age")
        data = load_data()
        for item in data["items"]:
            if item["id"] == id:
                item["name"] = new_name
                item["roll_no"] = rollno
                item["course"] = course
                item["age"] = age
                save_data(data)
                return redirect("read")
    data = load_data()
    for item in data["items"]:
        if item["id"] == id:
            return render(request, "update.html", {"item": item, "id": id})
    return HttpResponse("Item not found")
    

def delete(request,id):
    data = load_data()
    for i, item in enumerate(data["items"]):
        if item["id"] == id:
            data["items"].pop(i)
            save_data(data)
            return redirect("read")
    return HttpResponse("Item not found")
    # return render(request)