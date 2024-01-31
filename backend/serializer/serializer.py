from rest_framework import serializers
from comida.models import Comida
from producto.models import Producto
from categoria.models import Categoria
from pedido.models import Pedido
from django.http import HttpResponseBadRequest
    
class ComidaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comida
        fields = ('id', 'nombre')
        
        
class CategoriaSerializerOnlyNames(serializers.ModelSerializer):
    class Meta:
        model = Categoria   
        fields = ('id', 'nombre')
        depth = 1
        
        
class CategoriaSerializer(serializers.ModelSerializer):
    comida = ComidaSerializer()
    
    class Meta:
        model = Categoria   
        fields = ('id', 'nombre','comida')
        depth = 1
        
    def create(self, validated_data):
        comida_data = validated_data.pop('comida')
        nombre_comida = comida_data['nombre']
        try:
            comida_instance = Comida.objects.get(nombre=nombre_comida)
        except Comida.DoesNotExist:
            raise serializers.ValidationError({'comida': f'La comida con nombre "{nombre_comida}" no existe.'})
        categoria_instance = Categoria.objects.create(comida=comida_instance, **validated_data)
        return categoria_instance


class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto   
        fields = ('id', 'nombre', 'precio', 'categoria','comida')
    def create(self, validated_data):
        producto_instance = Producto.objects.create(**validated_data)
        return producto_instance
    
    
class ProductSerializerFilter(serializers.ModelSerializer):
    class Meta:
        model = Producto   
        fields = ('id', 'nombre', 'precio')
        depth = 1

class ProductoSerializerName(serializers.ModelSerializer):
    class Meta:
        model = Producto   
        fields = ('id', 'nombre', 'categoria','comida')
       
        
class PedidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pedido   
        fields = ('id', 'producto','timestamp')
        depth = 1
        