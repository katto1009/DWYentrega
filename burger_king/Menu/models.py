from django.db import models

# Create your models here.
class Project(models.Model): 
    title = models.CharField(max_length=50, verbose_name= "Titulo")
    description = models.TextField(verbose_name= "Descripcion")
    image = models.ImageField("Imagen", upload_to= "projects")
    link = models.URLField(verbose_name= "direccion web", null=True, blank= True)
    created = models.DateTimeField(auto_now_add=True, verbose_name= "Fecha Creacion")
    update = models.DateTimeField(auto_now=True, verbose_name="fecha edicion")

    class Meta:
        verbose_name = "Proyecto"
        verbose_name_plural = "Proyectos"
        ordering = ['created', 'update']


    def __str__(self):
        return self.title



