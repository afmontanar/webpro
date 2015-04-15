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
	ti = request.GET['ti']
	pm = request.GET['pm']
	sn = request.GET['sn']
	pa = request.GET['pa']
	sa = request.GET['sa']
	di = request.GET['di']
	cl = request.GET['cl']
	dt = request.GET['dt']
	r = Cliente.objects.create(TipoIdentificacion=ti, numeroId=pregunta, primeroNombre=pm,segunNombre=sn,primeroApellido=pa,segundoApellido=sa,direccion=di,celular=cl,detalles=dt)
	""" preguntas = Cliente.objects.all()
		data = serializers.serialize('json', preguntas, fields=('numeroId','primeroNombre'))
		return HttpResponse(data, mimetype='application/json')"""
