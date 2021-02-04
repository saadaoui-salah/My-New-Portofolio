from django.urls import path
from .views import SkilsListViewset, TechnologiesListViewset

##############   API   #######################
#router = routers.SimpleRouter()
#from rest_framework import routers
#router.register(r'skill-api', SkilsListViewset)
#router.register(r'tech-api', TechnologiesListViewset)

urlpatterns = [
    path('skills',SkilsListViewset.as_view()),
    path('tech',TechnologiesListViewset.as_view()),
]
