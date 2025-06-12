from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class Usuario(AbstractUser):
    cargo = [
        ("Administrador", "Administrador"),
        ("Professor", "Professor"),
    ]
    funcao = models.CharField(max_length=30, choices=cargo, default="Aluno")

    def __str__(self):
        return self.username

class Ambientes(models.Model):
    sig = models.IntegerField()
    descricao = models.TextField()
    ni = models.CharField(max_length=20)
    responsavel = models.CharField(max_length=50)

    class Meta:
        verbose_name_plural = "Ambientes"

class Sensores(models.Model):
    sensor = models.CharField(max_length=30)
    mac_address = models.CharField(max_length=50)
    unidade_med = models.CharField(max_length=20)
    latitude = models.FloatField()
    longitude = models.FloatField()
    status = models.BooleanField()

    class Meta:
        verbose_name_plural = "Sensores"

class Historico(models.Model):
    sensor = models.ForeignKey('Sensores', on_delete=models.CASCADE)
    ambiente = models.ForeignKey('Ambientes', on_delete=models.CASCADE)
    valor = models.FloatField()
    timestamp = models.DateTimeField()