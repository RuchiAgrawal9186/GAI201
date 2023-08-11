dic = {"abc":20,"xyz":25,"pqr":30}
print(dic)

def add_into_dict(name,age):
    dic[name]=age
    print(dic)

def update_into_dict(name,age):
    dic[name]=age
    print(dic)

def delete_into_dict(name):
    del dic[name]
    print(dic)



add_into_dict("asd",50)
update_into_dict("xyz",70)
delete_into_dict("pqr")