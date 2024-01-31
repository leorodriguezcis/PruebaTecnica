from serializer.serializer import CategoriaSerializer
from .models import Categoria
from rest_framework import viewsets, permissions

class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CategoriaSerializer