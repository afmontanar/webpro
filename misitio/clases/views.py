from django.shortcuts import render, redirect, get_object_or_404
from django.forms import ModelForm

from clases.models import Cliente

class ClienteForm(ModelForm):
	class Meta:
		model = Cliente

def tercero_list(request, template_name='terceros_list.html'):
	tercero = terceros.objects.all()
	data = {}
	data['object_list'] = tercero
	return render(request, template_name, data)

def clientes(request, template_name='cliente.html'):
	clientes = Cliente.objects.all()
	data = {}
	data['object_list'] = clientes
	return render(request, template_name, data)

# Create your views here.
