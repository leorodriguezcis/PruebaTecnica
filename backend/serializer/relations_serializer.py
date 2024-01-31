from rest_framework import serializers
from comida.models import Comida

from serializer.serializer import CategoriaSerializerOnlyNames, ComidaSerializer

class ComidaSerializerWithCategorias(serializers.ModelSerializer):
    categorias = CategoriaSerializerOnlyNames(many=True)
    class Meta:
        model = Comida
        fields = ('id', 'nombre', 'categorias')