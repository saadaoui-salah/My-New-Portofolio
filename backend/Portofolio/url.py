from django.urls import path
from . import views
from rest_framework import routers
from .views import ProjectListViewset

##############   API   #######################
#router = routers.DefaultRouter()
#router.register(r'api', ProjectListViewset)




urlpatterns = [
    path('projects',ProjectListViewset.as_view())
]