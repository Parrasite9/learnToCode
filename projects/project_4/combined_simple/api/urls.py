from django.urls import path
from . import views

urlpatterns = [
    path('api/contacts', views.ContactList.as_view(), name='contact_list'), # api/contacts will be routed to the ContactList view for handling
    path('api/contacts/<int:pk>', views.ContactDetail.as_view(), name='contact_detail'), # api/contacts will be routed to the ContactDetail view for handling
    path('api/companies', views.CompanyList.as_view(), name='company_list'), # api/contacts will be routed to the ContactList view for handling
    path('api/companies/<int:pk>', views.CompanyDetail.as_view(), name='company_detail'), # api/contacts will be routed to the ContactDetail view for handling
    path('api/locations', views.LocationList.as_view(), name='location_list'), # api/contacts will be routed to the ContactList view for handling
    path('api/locations/<int:pk>', views.LocationDetail.as_view(), name='location_detail'), # api/contacts will be routed to the ContactDetail view for handling
]
