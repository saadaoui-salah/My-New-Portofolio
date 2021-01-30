from django.urls import path
from .views import SkilsListViewset, TechnologiesListViewset
from rest_framework import routers

##############   API   #######################
router = routers.SimpleRouter()

router.register(r'skill-api', SkilsListViewset)
router.register(r'tech-api', TechnologiesListViewset)

urlpatterns = [
    path('skill',SkilsListViewset.as_view()),
    path('tech',TechnologiesListViewset.as_view())
]
