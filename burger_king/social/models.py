from django.db import models


# Create your models here.
class Link(models.Model):
    key = models.SlugField(verbose_name="Nombre clave", max_length=100, unique=True)
    name = models.CharField(verbose_name="Red social", max_length=200, null=True, blank= True)
    url = models.URLField(verbose_name="Enlace", max_length=200, null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True, verbose_name= "Fecha Creacion")
    update = models.DateTimeField(auto_now=True, verbose_name="fecha edicion")

    class Meta:
        verbose_name = "link"
        verbose_name_plural =("links")

    def __str__(self):
        return self.name




   