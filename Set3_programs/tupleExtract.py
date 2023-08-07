def format_people_info(people_list):
    # Initialize an empty string to store the formatted output
    formatted_output = ""

    # Iterate through each tuple in the list
    for name, age in people_list:
        # Add the formatted information to the output string
        formatted_output += f"{name} is {age} years old. "

    # Remove the trailing space and return the final formatted output
    return formatted_output.strip()

# Input list of tuples
people = [("John", 25), ("Jane", 30)]

# Call the function with the input list and print the output
output_string = format_people_info(people)
print(output_string)  # Output: "John is 25 years old. Jane is 30 years old."





