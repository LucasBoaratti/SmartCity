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
    escolha_sensor = [
        ("Temperatura", "Temperatura"),
        ("Umidade", "Umidade"),
        ("Luminosidade", "Luminosidade"),
        ("Contagem", "Contagem"),
    ]

    escolha_unidade_medida = [
        ("°C", "°C"),
        ("%", "%"),
        ("lux", "lux"),
        ("uni", "uni"),
    ]

    sensor = models.CharField(max_length=30, choices=escolha_sensor, default="Temperatura")
    mac_address = models.CharField(max_length=50)
    unidade_med = models.CharField(max_length=20, choices=escolha_unidade_medida, default="°C")
    latitude = models.FloatField()
    longitude = models.FloatField()
    status = models.BooleanField(default=True)

    class Meta:
        verbose_name_plural = "Sensores"

class Historico(models.Model):
    sensor = models.ForeignKey('Sensores', on_delete=models.CASCADE)
    ambiente = models.ForeignKey('Ambientes', on_delete=models.CASCADE)
    valor = models.FloatField()
    timestamp = models.DateTimeField()