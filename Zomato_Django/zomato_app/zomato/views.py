from django.shortcuts import render,redirect
from .models import Dish,Order

# Create your views here.

def index(request):
    
    dishes = Dish.objects.all()
    return render(request, 'index.html', {'dishes': dishes})


def add_dish(request):
    if request.method == 'POST':
        name = request.POST['name']
        price = request.POST['price']
        available = request.POST.get('available') == 'on'
        dish_image_url = request.POST.get('dish_image_url')
        
        # Create and save the dish with the converted value
        Dish.objects.create(name=name, price=price, available=available,image_url=dish_image_url)
        
        return redirect('index')
        
    return render(request, 'AddDish.html')

def update_dish(request, dish_id):
    dish = Dish.objects.get(pk=dish_id)
    if request.method == 'POST':
        # Update the dish's details with the submitted data
        dish.name = request.POST['name']
        dish.price = request.POST['price']
        dish.available = request.POST.get('available') == 'on'
        dish.image_url = request.POST["dish_image_url"]
        dish.save()
        return redirect('index')
    return render(request, 'update_Dish.html', {'dish': dish})

def delete_dish(request, dish_id):
    dish = Dish.objects.get(pk=dish_id)
    dish.delete()
    return redirect('index')
    # return render(request, 'zomato_app/delete_dish.html', {'dish': dish})
    
def place_order(request, dish_id):
    dish = Dish.objects.get(pk=dish_id)
    if request.method == 'POST':
        customer_name = request.POST['customer_name']
        quantity = int(request.POST['quantity'])
        
        # Default status for a new order
        status = 'preparing'
        
        order = Order.objects.create(
            customer_name=customer_name,
            quantity=quantity,
            status=status
        )
        order.dishes.add(dish)
        
        return redirect('order_list')
    return render(request, 'take_order.html', {'dish': dish})

def order_list(request):
    orders = Order.objects.all()
    return render(request, 'orders.html', {'orders': orders})

def update_order(request, order_id):
    # order = Order.objects.get(pk=order_id)
    
    if request.method == 'POST':
        new_status = request.POST['status']
        # new_status = request.POST.get('status')
        order = Order.objects.get(id=order_id)
        order.status = new_status
        order.save()
        return redirect('order_list')
    
    return render(request, 'update_order.html', {'order': order})

def delete_order(request, order_id):
    order = Order.objects.get(pk=order_id)
    order.delete()
    return redirect('order_list')
    