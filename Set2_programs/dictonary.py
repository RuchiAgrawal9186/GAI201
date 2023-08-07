employees = ['Kelly', 'Emma']
defaults = {"designation": 'Developer', "salary": 8000}

employee_data = {emp: defaults for emp in employees}
print(employee_data)

