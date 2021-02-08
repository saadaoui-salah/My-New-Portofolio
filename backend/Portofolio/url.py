from django.urls import path
from . import views
from rest_framework import routers
from .views import *

##############   API   #######################
#router = routers.DefaultRouter()
#router.register(r'api', ProjectListViewset)

urlpatterns = [
    path('projects',ProjectListViewset.as_view()),
    path('techs',TechnologyListViewset.as_view()),

]