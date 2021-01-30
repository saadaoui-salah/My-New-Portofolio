from rest_framework.serializers import ModelSerializer
from .models import *


class SkillSerializer(ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'


class TechnologySerializer(ModelSerializer):
    class Meta:
        model = Technology
        fields = '__all__'