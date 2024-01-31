from serializer.relations_serializer import ComidaSerializerWithCategorias
from serializer.serializer import ComidaSerializer
from .models import Comida
from rest_framework import viewsets, permissions
from rest_framework.response import Response

class ComidaViewSet(viewsets.ModelViewSet):
    queryset = Comida.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ComidaSerializer
    
    def list(self, request):
        comidas = Comida.objects.all()
        serializer = ComidaSerializerWithCategorias(comidas, many=True)
        return Response(serializer.data)
    
    
class ComidaViewSetBasic(viewsets.ModelViewSet):
    queryset = Comida.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ComidaSerializer