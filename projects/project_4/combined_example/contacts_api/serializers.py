from .serializers_base import ContactSerializerBase
from locations_api.serializers_base import LocationSerializerBase
from companies_api.serializers_base import CompanySerializerBase

class ContactSerializer(ContactSerializerBase): # serializers.ModelSerializer just tells django to convert sql to JSON
    home = LocationSerializerBase()
    company_set = CompanySerializerBase(many=True)
    class Meta(ContactSerializerBase.Meta):
        fields = ContactSerializerBase.Meta.fields + ('home', 'company_set')
