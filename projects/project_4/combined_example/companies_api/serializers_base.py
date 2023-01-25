from rest_framework import serializers 
from locations_api.serializers_base import LocationSerializerBase
from .models import Company

class CompanySerializerBase(serializers.ModelSerializer):
    class Meta:
        model = Company# tell django which model to use
        fields = ('id', 'name', 'industry',) # tell django which fields to include
