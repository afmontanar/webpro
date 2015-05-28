from django.conf.urls import patterns, include, url
from django.contrib import admin
from clases import views

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'misitio.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^cliente/$', views.clientes, name='clientes'),
    url(r'^clienteu/$', views.clienteu, name='clienteu'),
    url(r'^guardar-pregunta/$', views.guardar_pregunta, name='guardar_pregunta'),
  	url(r'^guardar_chofer/$', views.guardar_chofer, name='guardar_chofer'),
  	url(r'^busqueda_filtreada/$', views.busqueda_filtreada, name='busqueda_filtreada'),
  	url(r'^tener_Chofe_client/$', views.tener_Chofe_client, name='tener_Chofe_client')
  	
  
)
