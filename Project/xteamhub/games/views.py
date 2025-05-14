from django.shortcuts import render
from django.views.generic import ListView
from .models import Jogo

class GamePassListView(ListView):
    model = Jogo
    template_name = 'games/game_pass.html'
    context_object_name = 'jogos'
    paginate_by = 4  # Número de jogos por página


# Create your views here.
