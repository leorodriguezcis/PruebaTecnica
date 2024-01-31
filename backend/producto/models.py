from django.db import models
from comida.models import Comida
from categoria.models import Categoria

class Producto (models.Model):
    nombre = models.CharField(max_length=30)
    precio = models.IntegerField()
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE,null=False,blank=False)
    comida = models.ForeignKey(Comida, on_delete=models.CASCADE,null=False,blank=False)
    def __str__(self):
        return self.nombre
# Create your models here.
