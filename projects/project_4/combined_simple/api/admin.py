from django.contrib import admin

# Register your models here.
from .models import Contact, Company, Location
admin.site.register(Contact)
admin.site.register(Company)
admin.site.register(Location)
