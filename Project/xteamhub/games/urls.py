
from django.urls import path
from .views import (
    GamePassListView,
    JogoCreateView,
    JogoUpdateView,
    JogoDeleteView,
)

urlpatterns = [
    path('game-pass/', GamePassListView.as_view(), name='game-pass'),
    path('jogo/novo/', JogoCreateView.as_view(), name='jogo-novo'),
    path('jogo/<int:pk>/editar/', JogoUpdateView.as_view(), name='jogo-editar'),
    path('jogo/<int:pk>/deletar/', JogoDeleteView.as_view(), name='jogo-deletar'),
]
