from django.contrib import admin
from django.urls import path
from crud_app import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path("",views.index,name="crud_app"),
    path("add",views.add,name="add"),
    path("read",views.read,name="read"),
    path("update/<int:id>/",views.update,name="update"),
    path("delete/<int:id>/",views.delete,name="delete"),
]
