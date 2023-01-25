from django.db import models
from locations_api.models import Location

# Create your models here.
class Contact(models.Model):
    name = models.CharField(max_length=32)
    age = models.IntegerField()
    home = models.ForeignKey(Location, related_name='inhabitants', null=True, on_delete=models.SET_NULL)

