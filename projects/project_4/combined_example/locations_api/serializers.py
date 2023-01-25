from .serializers_base import LocationSerializerBase
from contacts_api.serializers_base import ContactSerializerBase
from companies_api.serializers_base import CompanySerializerBase

class LocationSerializer(LocationSerializerBase): # serializers.ModelSerializer just tells django to convert sql to JSON
    inhabitants = ContactSerializerBase(many=True)
    companies = CompanySerializerBase(many=True)
    class Meta(LocationSerializerBase.Meta):
        fields = LocationSerializerBase.Meta.fields + ('inhabitants', 'companies')
