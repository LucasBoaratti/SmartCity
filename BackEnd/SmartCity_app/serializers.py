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

class UsuarioCadastradoSerializer(serializers.ModelSerializer):
    nome = serializers.CharField(write_only=True)
    username = serializers.CharField(read_only=True)
    email = serializers.EmailField()
    senha = serializers.CharField(write_only=True)
    confirmarSenha = serializers.CharField(write_only=True)
    funcao = serializers.ChoiceField(choices=[("Administrador, Administrador"), ("Professor", "Professor")])

    class Meta:
        model = Usuario

        fields = ["nome", "username", "email", "senha", "confirmarSenha", "funcao"]

        extra_kwargs = {
            "password": {"write_only": True},
        }

    def validate(self, data):
        if data["senha"] != data["confirmarSenha"]:
            raise serializers.ValidationError("As senhas não coincidem.")
        return data

    def create(self, validated_data):
        nome = validated_data["nome"]
        email = validated_data["email"]
        senha = validated_data["senha"]
        funcao = validated_data["funcao"]

        usuario = Usuario(
            username=nome,
            email=email,
            password=senha,
            funcao=funcao,
        )

        usuario.set_password(validated_data["senha"])

        usuario.save()

        return usuario

class LoginUsuario(TokenObtainPairSerializer): #Coloca o nome e a função do usuário juntamente com o access token e o refresh_token
    def validate(self, attrs):
        data = super().validate(attrs)

        data["usuario"] = {
            "Nome": self.user.username,
            "Função": self.user.funcao,
        }

        return data