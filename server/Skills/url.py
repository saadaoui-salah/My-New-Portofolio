from django.urls import path
from .views import *

##############   API   #######################
#router = routers.SimpleRouter()
#from rest_framework import routers
#router.register(r'skill-api', SkilsListViewset)
#router.register(r'tech-api', TechnologiesListViewset)

urlpatterns = [
    path('skills',SkilsListViewset.as_view()),
    path('specialities',SpecialityListViewset.as_view()),
]
