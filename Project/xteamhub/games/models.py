from django.db import models

class Jogo(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    imagem = models.ImageField(upload_to='jogos/')

    def __str__(self):
        return self.nome
