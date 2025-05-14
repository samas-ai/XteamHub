from django.urls import path
from .views import GamePassListView

urlpatterns = [
    path('game-pass/', GamePassListView.as_view(), name='game-pass'),
]
