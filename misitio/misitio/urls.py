from django.conf.urls import patterns, include, url
from django.contrib import admin
from clases import views

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'misitio.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', views.tercero_list ,name='tercero_list'),
    url(r'^new$', views.tercero_create, name='f_terceros'),
    
)
