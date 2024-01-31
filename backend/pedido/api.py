from producto.models import Producto
from serializer.serializer import PedidoSerializer
from .models import Pedido
from rest_framework import viewsets, permissions
from rest_framework.response import Response

class PedidoViewSet(viewsets.ModelViewSet):
    queryset = Pedido.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PedidoSerializer
    
    def post(self, request, pk=None):
        producto = Producto.objects.get(id=pk)
        result = Pedido.objects.create(producto=producto)
        return Response(PedidoSerializer(result).data)
    
    def list(self, request):
        comidas = Pedido.objects.order_by('-timestamp')[:3]
        serializer = PedidoSerializer(comidas, many=True)
        return Response(serializer.data)