from .serializers_base import CompanySerializerBase
from locations_api.serializers_base import LocationSerializerBase
from contacts_api.serializers_base import ContactSerializerBase

class CompanySerializer(CompanySerializerBase): # serializers.ModelSerializer just tells django to convert sql to JSON
    headquarters = LocationSerializerBase()
    employees = ContactSerializerBase(many=True)
    class Meta(CompanySerializerBase.Meta):
        fields = CompanySerializerBase.Meta.fields + ('headquarters', 'employees')
