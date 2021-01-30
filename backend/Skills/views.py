from django.shortcuts import render
from rest_framework import generics
from .models import Skill, Technology
from .serializers import SkillSerializer, TechnologySerializer


class SkilsListViewset(generics.ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer  # for serialize our data


class TechnologiesListViewset(generics.ListAPIView):
    queryset = Technology.objects.all()
    serializer_class = TechnologySerializer  # for serialize our data
