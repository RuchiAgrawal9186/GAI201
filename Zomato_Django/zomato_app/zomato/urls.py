from django.contrib import admin
from django.urls import path,include
from zomato import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path("",views.index,name="index"),
    path("add_dish",views.add_dish,name="add_dish"),
    path('update_dish/<int:dish_id>', views.update_dish, name='update_dish'),
    path('delete_dish/<int:dish_id>', views.delete_dish, name='delete_dish'),
    path('place_order/<int:dish_id>', views.place_order, name='place_order'),
    path("order_list",views.order_list,name="order_list"),
    path('update_order/<int:order_id>', views.update_order, name='update_order'),
    path('delete_order/<int:order_id>', views.delete_order, name='delete_order'),
    

]