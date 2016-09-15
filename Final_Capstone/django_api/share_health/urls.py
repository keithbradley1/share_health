from rest_framework import routers
from django.conf.urls import url, include
from share_health import views

router = routers.DefaultRouter()
# router.register(r'user', views.UserView)
# router.register(r'nutrition', views.NutritionView)
# router.register(r'exercise', views.ExerciseView)

urlpatterns = [
    url(r'^', include(router.urls)),
]
