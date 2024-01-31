from django.db import models
from comida.models import Comida



class Categoria (models.Model):
    nombre = models.CharField(max_length=30)
    comida = models.ForeignKey(Comida, on_delete=models.CASCADE,null=False,blank=False,related_name='categorias')
    def __str__(self):
        return self.nombre
# Create your models here.
