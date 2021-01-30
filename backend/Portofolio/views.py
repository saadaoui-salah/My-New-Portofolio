from django.shortcuts import render
from rest_framework import generics
from .models import Project
from .serializers import ProjectSerializer


class ProjectListViewset(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer  # for serialize our data
