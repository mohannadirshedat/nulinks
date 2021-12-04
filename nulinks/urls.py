"""nulinks URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
"""
# Django imports
from django.conf import settings
import debug_toolbar
from django.conf.urls import include, url
from django.conf.urls.i18n import i18n_patterns
from django.urls import path
from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.views.generic import TemplateView ,RedirectView

urlpatterns = [
    path('', RedirectView.as_view(url='/home/', permanent=False), name='index'),


    # enable the admin interface
    path('admin/', admin.site.urls),
]
import mimetypes

mimetypes.add_type("application/javascript", ".js", True)
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += [
    path('__debug__/', include(debug_toolbar.urls)),
]

urlpatterns += i18n_patterns(
    path('accounts/', include('allauth.urls')),
    path("home/", TemplateView.as_view(template_name="pages/home.html"), name="home"),
)
