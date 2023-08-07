import json
from datetime import datetime

class CanteenApp:
    def __init__(self):
        self.inventory_file = "./snack_inventory.json"
        self.sales_file = "./sales_records.json"
        self.load_inventory_data()
        self.load_sales_data()

    def load_inventory_data(self):
        try:
            with open(self.inventory_file, "r") as file:
                self.inventory = json.load(file)
        except FileNotFoundError:
            self.inventory = []

    def save_inventory_data(self):
        with open(self.inventory_file, "w") as file:
            json.dump(self.inventory, file)

    def load_sales_data(self):
        try:
            with open(self.sales_file, "r") as file:
                self.sales_records = json.load(file)
        except FileNotFoundError:
            self.sales_records = []

    def save_sales_data(self):
        with open(self.sales_file, "w") as file:
            json.dump(self.sales_records, file)

    def add_snack(self):
        snack_id = input("Enter snack ID: ")
        snack_name = input("Enter snack name: ")
        snack_price = input("Enter snack price: ")
        available = input("Is snack available? (yes/no): ").lower() == "yes"

        if snack_id and snack_name and snack_price:
            snack = {
                "snack_id": snack_id,
                "snack_name": snack_name,
                "price": snack_price,
                "available": available
            }
            self.inventory.append(snack)
            self.save_inventory_data()
            print("Snack added successfully!")
        else:
            print("Please fill all the snack details.")

    def remove_snack(self):
        snack_id = input("Enter snack ID to remove: ")
        for snack in self.inventory:
            if snack["snack_id"] == snack_id:
                self.inventory.remove(snack)
                self.save_inventory_data()
                print("Snack removed successfully!")
                break
        else:
            print("Snack not found in inventory.")

    def update_availability(self):
        snack_id = input("Enter snack ID to update availability: ")
        available = input("Is snack available? (yes/no): ").lower() == "yes"
        for snack in self.inventory:
            if snack["snack_id"] == snack_id:
                snack["available"] = available
                self.save_inventory_data()
                print("Availability updated successfully!")
                break
        else:
            print("Snack not found in inventory.")

    def record_sale(self, snack_id):
        for snack in self.inventory:
            if snack["snack_id"] == snack_id:
                if snack["available"]:
                    snack["available"] = False
                    self.save_inventory_data()
                    sale = {
                        "snack_id": snack_id,
                        "name":snack["snack_name"],
                        "price":snack["price"],
                        "salling Date": str(datetime.now()),
                    }
                    self.sales_records.append(sale)
                    self.save_sales_data()
                    print("Sale recorded successfully!")
                else:
                    print("Snack is already sold.")
                break
        else:
            print("Snack not found in inventory.")

    def show_inventory(self):
        print("------ Snack Inventory ------")
        for snack in self.inventory:
            print(f"ID: {snack['snack_id']}, Name: {snack['snack_name']}, Price: {snack['price']}, Available: {'Yes' if snack['available'] else 'No'}")

    def show_sales_records(self):
        print("------ Sales Records ------")
        for sale in self.sales_records:
            print(f"Snack ID: {sale['snack_id']}, Timestamp: {sale['timestamp']}")

if __name__ == "__main__":
    app = CanteenApp()

    while True:
        print("\n--- Canteen App Menu ---")
        print("1. Add Snack")
        print("2. Remove Snack")
        print("3. Update Availability")
        print("4. Record Sale")
        print("5. Show Inventory")
        print("6. Show Sales Records")
        print("7. Exit")

        choice = input("Enter your choice (1-7): ")

        if choice == "1":
            app.add_snack()
        elif choice == "2":
            app.remove_snack()
        elif choice == "3":
            app.update_availability()
        elif choice == "4":
            snack_id = input("Enter snack ID for sale: ")
            app.record_sale(snack_id)
        elif choice == "5":
            app.show_inventory()
        elif choice == "6":
            app.show_sales_records()
        elif choice == "7":
            print("Exiting the Canteen App. Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.")