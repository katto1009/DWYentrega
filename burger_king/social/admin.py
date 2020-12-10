from django.contrib import admin
from .models import Link

# Register your models here.
class LinkAdmin(admin.ModelAdmin):
    readonly_fields = ('created' , 'update')


admin.site.register(Link, LinkAdmin)