from django.urls import path
from . import views

urlpatterns = [
    path('api/weapons', views.WeaponList.as_view(), name='weapon_list'),
    path('api/weapons<int:pk>', views.WeaponDetail.as_view(),
    name='weapon_detail'),
]