from django.shortcuts import render
from rest_framework import generics
from .models import *
from .serializers import *


class ProjectListViewset(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer  # for serialize our data

class TechnologyListViewset(generics.ListAPIView):
    queryset = Technology.objects.all()
    serializer_class = TechnologySerializer  # for serialize our data
