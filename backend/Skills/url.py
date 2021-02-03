from django.urls import path
from .views import SkilsListViewset, getp, TechnologiesListViewset

##############   API   #######################
#router = routers.SimpleRouter()
#from rest_framework import routers
#router.register(r'skill-api', SkilsListViewset)
#router.register(r'tech-api', TechnologiesListViewset)

urlpatterns = [
    path('skills',SkilsListViewset.as_view()),
]
