from rest_framework import generics
from .serializers import CompanySerializer
from .models import Company 

class CompanyList(generics.ListCreateAPIView):
    queryset = Company.objects.all() # tell django how to retrieve all objects from the DB
    serializer_class = CompanySerializer # tell django what serializer to use

class CompanyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

