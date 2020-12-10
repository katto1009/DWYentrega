from django.shortcuts import render
from .models import Project
from django.core.paginator import Paginator,EmptyPage, PageNotAnInteger

# Create your views here.
def menu(request):
    projects = Project.objects.all()

    page = request.GET.get('page',1)
    paginator = Paginator(projects, 3)

    try:
        projects = paginator.page(page)
    except PageNotAnInteger:
        projects =paginator.page(1)
    except EmptyPage:
        projects = paginator.page(paginator.num_pages)
        
    return render(request,"Menu/Menu.html",{'projects':projects})
    