from django import forms
from .models import Jogo

class JogoForm(forms.ModelForm):
    class Meta:
        model = Jogo
        fields = ['nome', 'descricao', 'imagem']

        widgets = {
            'nome': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Digite o nome do jogo'
            }),
            'descricao': forms.Textarea(attrs={
                'class': 'form-control',
                'rows': 4,
                'placeholder': 'Descrição breve sobre o jogo...'
            }),
            'imagem': forms.ClearableFileInput(attrs={
                'class': 'form-control-file'
            }),
        }

        labels = {
            'nome': 'Nome do jogo',
            'descricao': 'Descrição',
            'imagem': 'Imagem de capa',
        }
