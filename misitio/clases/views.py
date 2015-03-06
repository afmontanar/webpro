from django.shortcuts import render, redirect, get_object_or_404
from django.forms import ModelForm
from clases.models import Cliente,Chofer

class ClienteForm(ModelForm):
	class Meta:
		model = Cliente
		
class ChoferForm(ModelForm):
	class Meta:
		model = Chofer

def tercero_list(request, template_name='terceros_list.html'):
	tercero = terceros.objects.all()
	data = {}
	data['object_list'] = tercero
	return render(request, template_name, data)

def clientes(request, template_name='cliente.html'):
	form = ClienteForm(request.POST or None)
	if form.is_valid():
		form.save()
	for x in xrange(1,10):
		form1 = ChoferForm(request.POST or None)
		if form.is_valid():
			form.save()
			return redirect('books_fbv:book_list')	
	return render(request, template_name, {'form':form})

def listCliente(request, template_name='cliente.html'):
	clientes = Cliente.objects.all()
	data = {}
	data['object_list'] = clientes
	return render(request, template_name, data)

def chofer(request, template_name='books_fbv/book_form.html'):
	form = ChoferForm(request.POST or None)
	if form.is_valid():
		form.save()
		return redirect('books_fbv:book_list')
	return render(request, template_name, {'form':form})

# Create your views here.
