from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, UpdateAPIView
from rest_framework.views import APIView
from .models import Ambientes, Sensores, Historico
from .serializers import AmbientesSerializer, SensoresSerializer, HistoricoSerializer, LoginUsuario
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import serializers
from datetime import date, datetime
from .permissions import IsAdministrador
import pandas as pd
import os

# Create your views here.

class Login(TokenObtainPairView):
    serializer_class = LoginUsuario

class AmbientesLCAPIView(ListCreateAPIView):
    queryset = Ambientes.objects.all()

    serializer_class = AmbientesSerializer

    permission_classes = [IsAuthenticated]

class AmbientesRUDAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Ambientes.objects.all()

    serializer_class = AmbientesSerializer

    permission_classes = [IsAuthenticated]

    lookup_field = "pk"

class SensoresLCAPIView(ListCreateAPIView):
    queryset = Sensores.objects.all()

    serializer_class = SensoresSerializer

    permission_classes = [IsAuthenticated]

class SensoresRUDAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Sensores.objects.all()

    serializer_class = SensoresSerializer

    permission_classes = [IsAuthenticated]

    lookup_field = "pk"

class HistoricoLCAPIView(ListCreateAPIView):
    queryset = Historico.objects.all()

    serializer_class = HistoricoSerializer

    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        valor = serializer.validated_data.get("valor")
        timeStamp = serializer.validated_data.get("timestamp")

        if valor < 0:
            raise serializers.ValidationError("O valor do sensor não pode ser negativo.")
        
        if timeStamp.date() > date.today():
            raise serializers.ValidationError("A data do sensor não pode ser superior a data de hoje.")
        
        serializer.save()

class HistoricoRUDAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Historico.objects.all()

    serializer_class = HistoricoSerializer

    permission_classes = [IsAuthenticated]

    lookup_field = "pk"

    def perform_create(self, serializer):
        valor = serializer.validated_data.get("valor")
        timeStamp = serializer.validated_data.get("timestamp")

        if valor < 0:
            raise serializers.ValidationError("O valor do sensor não pode ser negativo.")
        
        if timeStamp.date() > date.today():
            raise serializers.ValidationError("A data do sensor não podem ser superior a data de hoje.")
        
        serializer.save()

class BuscarSensor(APIView): #APIView permite criar endpoints personalizados com GET, POST etc.
    permission_classes = [IsAuthenticated]

    def post(self, request): 
        sensor = request.data.get("sensor") #Buscando o sensor no banco de dados

        if not sensor: #Verificando se o sensor não existe
            return Response({"Erro": "Sensor não encontrado."}, status=400)

        sensores = Sensores.objects.filter(sensor__icontains=sensor) #Consultando na tabela de sensores, os dados que contenha a palavra digitada pelo usuário | icontains: permite busca sem diferenciar letras maiúsculas/minúsculas

        serializerJSON = SensoresSerializer(sensores, many=True) #Transformando os dados em JSON

        return Response(serializerJSON.data) #Retornando os sensores encontrados para o usuário
    
class BuscarStatusSensor(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        status = request.data.get("status")

        if not status:
            return Response({"Erro": "Status do sensor não encontrado."}, status=400)
        
        opcoesStatus = status.lower() == "true" #Transformando um campo booleano em string

        statusSensores = Sensores.objects.filter(status=opcoesStatus)

        serializerJSON = SensoresSerializer(statusSensores, many=True)

        return Response(serializerJSON.data)
    
class BuscarDataSensor(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        timestamp = request.data.get("timestamp")

        if not timestamp:
            return Response({"Erro": "Data e hora não encontradas."}, status=400)
        
        try:
            dataTipoData = datetime.strptime(timestamp, "%Y-%m-%d %H:%M:%S") #Verificando a sintaxe da data e hora
        except (ValueError, TypeError):
            return Response({"Erro": "Data e hora com formatos inválidos. Use o formato: AAAA-MM-DD HH:MM:SS."}, status=400)
        
        dataSensores = Historico.objects.filter(timestamp=dataTipoData)

        serializerJSON = HistoricoSerializer(dataSensores, many=True)

        return Response(serializerJSON.data)
    
class AtualizarStatusSensor(UpdateAPIView):
    queryset = Sensores.objects.all()

    serializer_class = SensoresSerializer

    permission_classes = [IsAuthenticated]

    lookup_field = "pk"

class VerSensoresRegistrados(APIView):
    permission_classes = [IsAdministrador]

    def post(self, request):
        arquivo = os.path.join(os.getcwd(), "temperatura.xlsx") 

        arquivoExcel = pd.read_excel(arquivo)

        timestamp = request.data.get("timestamp")

        if not timestamp:
            return Response({"Erro": "Data e hora não encontradas."}, status=400)
        
        try:
            formatoData = datetime.strptime(timestamp, "%Y-%m-%d")
        except (ValueError, TypeError):
            return Response({"Erro": "Data com formato inválido. Formato esperado: AAAA-MM-DD"}, status=400)
        
        arquivoExcel["timestamp"] = pd.to_datetime(arquivoExcel["timestamp"], errors="coerce")

        dataTemperatura = arquivoExcel.loc[arquivoExcel["timestamp"].dt.date == formatoData.date()]

        if dataTemperatura.empty:
            return Response({"Erro": "Nenhum sensor encontrado com essa data."}, status=404)
    
        return Response(dataTemperatura.to_dict(orient="records"), status=200)