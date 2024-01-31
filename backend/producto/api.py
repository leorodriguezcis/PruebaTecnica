from categoria.models import Categoria
from comida.models import Comida
from serializer.serializer import ProductSerializerFilter, ProductoSerializer
from .models import Producto
from rest_framework import viewsets, permissions
from rest_framework.response import Response

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProductoSerializer
   
    
class ProductoViewSetFilter(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProductSerializerFilter
    def get_queryset(self):
        nombre_comida = self.kwargs['comida']
        nombre_categoria = self.kwargs['categoria']
        comida = Comida.objects.get(nombre=nombre_comida)
        categoria = Categoria.objects.get(nombre=nombre_categoria, comida=comida)
        queryset = Producto.objects.filter(comida=comida,categoria=categoria)
        return queryset
    