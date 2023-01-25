from django.db import models
from locations_api.models import Location
from contacts_api.models import Contact

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=32)
    industry = models.CharField(max_length=32)
    headquarters = models.ForeignKey(Location, related_name='companies', null=True, on_delete=models.SET_NULL)
    employees = models.ManyToManyField(Contact)
