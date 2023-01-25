from django.db import models

# Create your models here.

class Location(models.Model):
    street = models.CharField(max_length=64)
    city = models.CharField(max_length=32)
    state = models.CharField(max_length=2)

class Contact(models.Model):
    name = models.CharField(max_length=32)
    age = models.IntegerField()
    home = models.ForeignKey(Location, related_name='inhabitants', null=True, on_delete=models.SET_NULL)

class Company(models.Model):
    name = models.CharField(max_length=32)
    industry = models.CharField(max_length=32)
    headquarters = models.ForeignKey(Location, related_name='companies', null=True, on_delete=models.SET_NULL)
    employees = models.ManyToManyField(Contact)
