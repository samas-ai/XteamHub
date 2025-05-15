from django.views.generic import ListView, CreateView, UpdateView, DeleteView, TemplateView
from django.urls import reverse_lazy
from .models import Jogo
from .forms import JogoForm

# Lista com paginação
class GamePassListView(ListView):
    model = Jogo
    template_name = 'games/game_pass.html'
    context_object_name = 'jogos'
    paginate_by = 4

    def get_queryset(self):
        return Jogo.objects.all().order_by('id')


class JogoCreateView(CreateView):
    model = Jogo
    form_class = JogoForm
    template_name = 'games/jogo_form.html'
    success_url = reverse_lazy('game-pass')

class JogoUpdateView(UpdateView):
    model = Jogo
    form_class = JogoForm
    template_name = 'games/jogo_form.html'
    success_url = reverse_lazy('game-pass')

# Exclusão de jogo
class JogoDeleteView(DeleteView):
    model = Jogo
    template_name = 'games/jogo_confirm_delete.html'
    success_url = reverse_lazy('game-pass')

class HomeView(TemplateView):
    template_name = 'games/home.html'
