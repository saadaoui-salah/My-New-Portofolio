from rest_framework.serializers import ModelSerializer
from .models import *


class ProjectSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class TechnologySerializer(ModelSerializer):
    class Meta:
        model = Technology
        fields = '__all__'