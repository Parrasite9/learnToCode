from rest_framework import serializers 
from .models import Contact 

class ContactSerializerBase(serializers.ModelSerializer):
    class Meta:
        model = Contact # tell django which model to use
        fields = ('id', 'name', 'age',) # tell django which fields to include

