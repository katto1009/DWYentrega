from django.shortcuts import render
from .models import Project

# Create your views here.
def menu(request):
    projects = Project.objects.all()
    return render(request,"Menu/Menu.html",{'projects':projects})
    