from rest_framework.permissions import BasePermission

class IsDiretor(BasePermission):
    def has_permission(self, request):
        if request.user.is_authenticated and request.user.funcao == "Diretor":
            return True
        return False
    
class IsProfessor(BasePermission):
    def has_permission(self, request):
        if request.user.is_authenticated and request.user.funcao == "Professor":
            return True
        return False