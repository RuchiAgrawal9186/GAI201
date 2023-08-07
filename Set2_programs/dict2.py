sample_dict = {
    "name": "Kelly",
    "age": 25,
    "salary": 8000,
    "city": "New York"
}

# Keys to extract
keys = ["name", "salary"]

extracted_dict = {key: sample_dict[key] for key in keys if key in sample_dict}

# Display the new dictionary
print(extracted_dict)