from rest_framework.serializers import ModelSerializer
from .models import *


class SkillSerializer(ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'


class SpecialitySerializer(ModelSerializer):
    class Meta:
        model = Speciality
        fields = '__all__'