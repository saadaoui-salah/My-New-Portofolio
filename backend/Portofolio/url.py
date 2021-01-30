from django.urls import path
from . import views
from rest_framework import routers
from .views import ProjectListViewset

##############   API   #######################
urlpatterns = [
    path('project',ProjectListViewset.as_view())
]



router = routers.DefaultRouter()
router.register(r'api', ProjectListViewset)
