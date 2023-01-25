from rest_framework import generics
from .serializers import LocationSerializer
from .models import Location

class LocationList(generics.ListCreateAPIView):
    queryset = Location.objects.all() # tell django how to retrieve all objects from the DB
    serializer_class = LocationSerializer # tell django what serializer to use

class LocationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
