import json
import os
print("Current working directory:", os.getcwd())

def load_menu_from_file(filename):
    with open(filename, 'r') as file:
        menu_data = json.load(file)
    return menu_data

def save_menu_to_file(menu_data, filename):
    with open(filename, 'w') as file:
        json.dump(menu_data, file)

def load_order_from_file(filename):
    with open(filename, 'r') as file:
        order_data = json.load(file)
    return order_data

def save_order_to_file(order_data, filename):
    with open(filename, 'w') as file:
        json.dump(order_data, file)

def add_dish_to_menu(menu_data):
    print("\nAdd Dish to Menu")
    dish_id = input("Enter dish ID: ")
    
    if dish_id in menu_data:
        print("Dish ID already exists. Please choose a different ID.")
    else:
        name = input("Enter dish name: ")
        price = float(input("Enter dish price: "))
        availability = input("Is the dish available? (yes/no): ").lower() == "yes"
        
        new_dish = {"name": name, "price": price, "availability": availability}
        menu_data[dish_id] = new_dish
        save_menu_to_file(menu_data, "menu.json")
        print("Dish added to the menu successfully!")

def remove_dish_from_menu(menu_data):
    print("\nRemove Dish from Menu")
    dish_id = input("Enter dish ID to remove: ")
    
    if dish_id in menu_data:
        del menu_data[dish_id]
        save_menu_to_file(menu_data, "menu.json")
        print("Dish removed from the menu successfully!")
    else:
        print("Dish ID not found in the menu.")

def update_dish_availability(menu_data):
    print("\nUpdate Dish Availability")
    dish_id = input("Enter dish ID to update availability: ")
    
    if dish_id in menu_data:
        new_availability = input("Is the dish available now? (yes/no): ").lower() == "yes"
        menu_data[dish_id]["availability"] = new_availability
        save_menu_to_file(menu_data, "menu.json")
        print("Dish availability updated successfully!")
    else:
        print("Dish ID not found in the menu.")

def take_order(menu_data, order_data):
    print("\nTake Order")
    customer_name = input("Enter customer name: ")
    
    order_id = str(len(order_data) + 1)  # Generate a unique order ID
    
    print("\nMenu:")
    for dish_id, dish in menu_data.items():
        print(f"{dish_id}: {dish['name']} (${dish['price']}) - Availability: {'Available' if dish['availability'] else 'Not Available'}")
    
    ordered_dishes = []
    while True:
        dish_id = input("Enter dish ID (or 'done' to finish ordering): ")
        if dish_id == 'done':
            break
        elif dish_id in menu_data:
            if menu_data[dish_id]["availability"]:
                ordered_dishes.append(dish_id)
                print("Dish added to the order.")
            else:
                print("Sorry, the selected dish is not available.")
        else:
            print("Invalid dish ID. Please try again.")

    if ordered_dishes:
        order_data[order_id] = {
            "customer": customer_name,
            "dishes": ordered_dishes,
            "status": "received"
        }
        for dish_id in ordered_dishes:
            menu_data[dish_id]["availability"] = False

        save_order_to_file(order_data, "orders.json")
        save_menu_to_file(menu_data, "menu.json")
        print("Order placed successfully!")
    else:
        print("No dishes were ordered.")

def update_order_status(order_data):
    print("\nUpdate Order Status")
    order_id = input("Enter order ID to update status: ")
    
    if order_id in order_data:
        new_status = input("Enter new status (received/preparing/ready for pickup/delivered): ")
        order_data[order_id]["status"] = new_status
        save_order_to_file(order_data, "orders.json")
        print("Order status updated successfully!")
    else:
        print("Order ID not found.")

def main():
    print("Current working directory:", os.getcwd())
    menu_data = load_menu_from_file("F:\MASAI PROJECTS\Python\Learning_Python\Zomato_Chronicles\menu.json")
    order_data = load_order_from_file("F:\MASAI PROJECTS\Python\Learning_Python\Zomato_Chronicles\orders.json")
    
    while True:
        print("\nZesty Zomato - Main Menu")
        print("1. Add Dish to Menu")
        print("2. Remove Dish from Menu")
        print("3. Update Dish Availability")
        print("4. Take Order")
        print("5. Update Order Status")
        print("6. Exit")
        
        choice = input("Enter your choice: ")
        
        if choice == "1":
            add_dish_to_menu(menu_data)
        elif choice == "2":
            remove_dish_from_menu(menu_data)
        elif choice == "3":
            update_dish_availability(menu_data)
        elif choice == "4":
            take_order(menu_data, order_data)
        elif choice == "5":
            update_order_status(order_data)
        elif choice == "6":
            save_order_to_file(order_data, "orders.json")
            print("Exiting the program.")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()