from django.db import models

# Create your models here.
class Address(models.Model):
    street_name = models.CharField(max_length=50)
    city = models.CharField(max_length=25)
    state = models.CharField(max_length=12)
    zip_code = models.CharField(max_length=10)
    