from django.shortcuts import render
from rest_framework import generics
from .models import Skill, Technology
from .serializers import SkillSerializer, TechnologySerializer
from django.http import JsonResponse

class SkilsListViewset(generics.ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer  # for serialize our data


class TechnologiesListViewset(generics.ListAPIView):
    queryset = Technology.objects.all()
    serializer_class = TechnologySerializer  # for serialize our data

def getp(request):
    return JsonResponse('saadaaa',safe=False)