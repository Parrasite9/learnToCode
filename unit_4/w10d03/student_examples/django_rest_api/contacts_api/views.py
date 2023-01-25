from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .serializers import ContactSerializer
from .models import Contact

# /CONTACTS POST, GET 
class ContactList(generics.ListCreateAPIView):
    queryset = Contact.objects.all().order_by('id')
    serializer_class = ContactSerializer

# /CONTACTS/:ID 
class ContactDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contact.objects.all().order_by('id')
    serializer_class = ContactSerializer
