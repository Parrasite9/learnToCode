from rest_framework import serializers
from .models import Contact, Company, Location

class CompanySerializerBase(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('id', 'name', 'industry') # tell django which fields to include

class ContactSerializerBase(serializers.ModelSerializer): # serializers.ModelSerializer just tells django to convert sql to JSON
    class Meta:
        model = Contact # tell django which model to use
        fields = ('id', 'name', 'age') # tell django which fields to include

class LocationSerializerBase(serializers.ModelSerializer): # serializers.ModelSerializer just tells django to convert sql to JSON
    class Meta:
        model = Location# tell django which model to use
        fields = ('id', 'street', 'city', 'state') # tell django which fields to include

class LocationSerializer(LocationSerializerBase): # serializers.ModelSerializer just tells django to convert sql to JSON
    companies = CompanySerializerBase(many=True)
    inhabitants = ContactSerializerBase(many=True)
    class Meta(LocationSerializerBase.Meta):
        fields = LocationSerializerBase.Meta.fields + ('companies','inhabitants') # tell django which fields to include

class ContactSerializer(ContactSerializerBase): # serializers.ModelSerializer just tells django to convert sql to JSON
    home = LocationSerializerBase()
    company_set = CompanySerializerBase(many=True)
    class Meta(ContactSerializerBase.Meta):
        fields = ContactSerializerBase.Meta.fields + ('company_set','home') # tell django which fields to include

class CompanySerializer(CompanySerializerBase): # serializers.ModelSerializer just tells django to convert sql to JSON
    employees = ContactSerializerBase(many=True)
    headquarters = LocationSerializerBase()
    class Meta(CompanySerializerBase.Meta):
        fields = CompanySerializerBase.Meta.fields + ('employees','headquarters') # tell django which fields to include
