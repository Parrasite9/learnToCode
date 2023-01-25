from django.shortcuts import render
from rest_framework import generics
from .serializers import WeaponSerializer
from .models import Weapon

# Create your views here.
class WeaponList(generics.ListCreateAPIView):
    queryset = Weapon.objects.all().order_by('id')
    serializer_class = WeaponSerializer

class WeaponDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Weapon.objects.all().order_by('id')
    serializer_class = WeaponSerializer