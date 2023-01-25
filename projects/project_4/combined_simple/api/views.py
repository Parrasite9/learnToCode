from rest_framework import generics
from .serializers import ContactSerializer, CompanySerializer, LocationSerializer
from .models import Contact, Company, Location

class ContactList(generics.ListCreateAPIView):
    queryset = Contact.objects.all() # tell django how to retrieve all objects from the DB
    serializer_class = ContactSerializer # tell django what serializer to use

class ContactDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

class CompanyList(generics.ListCreateAPIView):
    queryset = Company.objects.all() # tell django how to retrieve all objects from the DB
    serializer_class = CompanySerializer # tell django what serializer to use

class CompanyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class LocationList(generics.ListCreateAPIView):
    queryset = Location.objects.all() # tell django how to retrieve all objects from the DB
    serializer_class = LocationSerializer # tell django what serializer to use

class LocationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
