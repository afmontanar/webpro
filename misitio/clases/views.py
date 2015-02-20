from django.shortcuts import render, redirect, get_object_or_404
from django.forms import ModelForm

from clases.models import terceros

class TerceroForm(ModelForm):
	class Meta:
		model = terceros

def tercero_list(request, template_name='terceros_list.html'):
	tercero= terceros.objects.all()
	data = {}
	data['object_list'] = tercero
	return render(request, template_name, data)

def tercero_create(request, template_name='f_terceros.html'):
	form = TerceroForm(request.POST or None)
	if form.is_valid():
		form.save()
		return redirect('clases:terceros_list')
	return render(request, template_name, {'form':form})

# Create your views here.
