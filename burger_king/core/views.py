from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,"core/Index.html")

def acercade(request):
    return render(request,"core/Acercade.html")

def contacto(request):
    return render(request,"core/Contacto.html")
    
def ofertas(request):
    return render(request,"core/Ofertas.html")

def menu(request):
    return render(request,"core/Menu.html")