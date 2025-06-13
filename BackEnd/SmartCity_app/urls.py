from django.urls import path
from . import views

urlpatterns = [
    path("login", view=views.TokenObtainPairView.as_view(), name="Login do usuário."),
    path("ambiente", view=views.AmbientesLCAPIView.as_view(), name="Criar e listar ambiente."),
    path("ambiente/<int:pk>", view=views.AmbientesRUDAPIView.as_view(), name="Atualizar e excluir ambiente."),
    path("sensor", view=views.SensoresLCAPIView.as_view(), name="Listar e criar sensores."),
    path("sensor/<int:pk>", view=views.SensoresRUDAPIView.as_view(), name="Atualizar e excluir sensores."),
    path("historico", view=views.HistoricoLCAPIView.as_view(), name="Listar e criar históricos."),
    path("historico/<int:pk>", view=views.HistoricoRUDAPIView.as_view(), name="Atualizar e excluir históricos."),
    path("buscarNomeSensor", view=views.BuscarSensor.as_view(), name="Buscar os nomes dos sensores."),  
    path("buscarStatusSensor", view=views.BuscarStatusSensor.as_view(), name="Buscar status do sensor."), 
    path("buscarDataSensor", view=views.BuscarDataSensor.as_view(), name="Buscar data do sensor."),
    path("atualizarStatusSensor", view=views.AtualizarStatusSensor.as_view(), name="Atualizar status do sensor."),
    path("buscarSensorRegistrado", view=views.VerSensoresRegistrados.as_view(), name="Buscar data de um sensor já registrado."),
    path("cadastro", view=views.UsuarioCadastradoLCAPIView.as_view(), name="Cadastrar usuário."),
]