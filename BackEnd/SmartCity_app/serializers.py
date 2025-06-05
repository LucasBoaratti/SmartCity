from rest_framework import serializers
from .models import Ambientes, Sensores, Historico, Usuario
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario

        fields = "__all__"

class AmbientesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ambientes

        fields = "__all__"

class SensoresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sensores

        fields = "__all__"

class HistoricoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Historico

        fields = "__all__"

class LoginUsuario(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        data["usuario"] = {
            "Nome": self.user.username,
            "Função": self.user.funcao,
        }

        return data