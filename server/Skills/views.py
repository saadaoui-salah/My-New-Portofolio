from django.shortcuts import render
from rest_framework import generics
from .models import *
from .serializers import *

class SkilsListViewset(generics.ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer  # for serialize our data


class SpecialityListViewset(generics.ListAPIView):
    queryset = Speciality.objects.all()
    serializer_class = SpecialitySerializer  # for serialize our data
