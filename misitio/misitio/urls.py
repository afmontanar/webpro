from django.conf.urls import patterns, include, url
from django.contrib import admin
from clases import views

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'misitio.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^cliente$', views.clientes, name='clientes')
)
