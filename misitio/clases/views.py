import json

from django.http import HttpResponse, Http404
from django.shortcuts import render_to_response
from clases.models import Cliente
from django.template import RequestContext

"""
class ClienteForm(ModelForm):
	class Meta:
		model = Cliente
"""		

#puede que uno este trabajando duro para obtener cualquier objetivo pero si uno no cuanta con la guia ni la bendicion de jehova para dicha 
#labor de nada serviran nuestros esfuerzos

def clientes(request):
	return render_to_response('cliente.html', {'nothing': 'nothing'}, context_instance=RequestContext(request))

"""
def clientes(request, template_name='cliente.html'):
	form = ClienteForm(request.POST or None)
	if form.is_valid():
		form.save()
	else:
		form = ClienteForm()
	return render(request, template_name, {'form':form})
"""
def guardar_pregunta(request):
	pregunta = request.GET['id']
	r = Cliente.objects.create(TipoIdentificacion='cc', numeroId=pregunta, primeroNombre='andreCalmar',segunNombre='otencio',primeroApellido='pascuales',segundoApellido='omirana',direccion='crr12',celular='301692',detalles='ninguno')
	""" preguntas = Cliente.objects.all()
		data = serializers.serialize('json', preguntas, fields=('numeroId','primeroNombre'))
		return HttpResponse(data, mimetype='application/json')"""
