from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Ambientes, Sensores, Historico
from .serializers import AmbientesSerializer, SensoresSerializer, HistoricoSerializer, LoginUsuario
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated

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

class HistoricoRUDAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Historico.objects.all()

    serializer_class = HistoricoSerializer

    permission_classes = [IsAuthenticated]

    lookup_field = "pk"