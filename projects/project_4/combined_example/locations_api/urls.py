from django.urls import path
from . import views

urlpatterns = [
    path('api/locations', views.LocationList.as_view(), name='location_list'), # api/contacts will be routed to the ContactList view for handling
    path('api/locations/<int:pk>', views.LocationDetail.as_view(), name='location_detail'), # api/contacts will be routed to the ContactDetail view for handling
]
