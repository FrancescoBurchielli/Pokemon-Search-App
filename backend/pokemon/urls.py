from django.urls import path
from django.views.decorators.cache import cache_page
from .views import RetrievePokemon

urlpatterns = [
    path('<str:name>/', cache_page(60 * 15)(RetrievePokemon.as_view())),
]
