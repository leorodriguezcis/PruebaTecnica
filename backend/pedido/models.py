from django.db import models
from producto.models import Producto

class Pedido (models.Model):
    timestamp =  models.DateTimeField(auto_now_add=True)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE,null=False,blank=False,related_name='pedidos')
# Create your models here.
