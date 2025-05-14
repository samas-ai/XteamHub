from django.shortcuts import render
from django.views.generic import ListView
from .models import Jogo

class GamePassListView(ListView):
    model = Jogo
    template_name = 'games/game_pass.html'
    context_object_name = 'jogos'
    paginate_by = 4

    def get_queryset(self):
        return Jogo.objects.all().order_by('id')  # ou 'nome'



# Create your views here.
