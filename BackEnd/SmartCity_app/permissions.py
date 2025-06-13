from rest_framework.permissions import BasePermission

class IsAdministrador(BasePermission):
    def has_permission(self, request, view):
        if request.user.is_authenticated and request.user.funcao == "Administrador":
            return True
        return False
    
class IsProfessor(BasePermission):
    def has_permission(self, request, view):
        if request.user.is_authenticated and request.user.funcao == "Professor":
            return True
        return False 