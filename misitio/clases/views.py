import cjson
from django.shortcuts import render, redirect, render_to_response, get_object_or_404
from django.forms import ModelForm
from clases.models import Cliente,Chofer
from django.http import HttpResponse
from django.template import loader, Context

class ClienteForm(ModelForm):
	class Meta:
		model = Cliente
		
#puede que uno este trabajando duro para obtener cualquier objetivo pero si uno no cuanta con la guia ni la bendicion de jehova para dicha 
#labor de nada serviran nuestros esfuerzos

"""
def clientes(request, template_name='cliente.html'):
	form = ClienteForm(request.POST or None)
	if form.is_valid():
		form.save()
	else:
		form = ClienteForm()
	return render(request, template_name, {'form':form})
"""
def clientes(request,template_name='cliente.html'):
	nide = request.POST.get("nide")
	form = 'ola andres'
	if nide:
		form.save()
	else:
		form = ClienteForm()
	return render(request, template_name, {'form':form})
