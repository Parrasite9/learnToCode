from django.db import models

# Create your models here.
class Weapon(models.Model):
    name = models.CharField(max_length=32)
    century = models.CharField(max_length=10)
    gender_specific = models.CharField(max_length=10)

