from django.db import models

# Create your models here.
class Dish(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=6,decimal_places=2)
    available = models.BooleanField(default=True)  
    image_url = models.CharField(max_length=255, default='https://placehold.co/400')

    def __str__(self):
        return self.name
    
class Order(models.Model):
    STATUS_CHOICES = [
        ('received', 'Received'),
        ('preparing', 'Preparing'),
        ('delivered', 'Delivered'),
    ]
    customer_name = models.CharField(max_length=100)
    dishes = models.ManyToManyField(Dish)
    quantity = models.PositiveIntegerField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='preparing')
    timestamp = models.DateTimeField(auto_now_add=True)