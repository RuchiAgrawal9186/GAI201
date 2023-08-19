from django.contrib import admin
from django.urls import path,include

from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    # path("",views.index,name="index"),
     path('weather/<str:city>/', views.weather_view, name='weather'),
    path('weather/', views.weather_create, name='weather-list'),
    path('weather/<str:city>/update/', views.weather_update, name='weather-update'),
    path('weather/<str:city>/delete/', views.weather_delete, name='weather-delete'),
]
