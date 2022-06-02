from django.urls import path

from .views import RetrievePokemon

urlpatterns = [
    path('<str:name>/',RetrievePokemon.as_view()),
]