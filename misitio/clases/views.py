import json

from django.http import HttpResponse, Http404
from django.shortcuts import render_to_response
from clases.models import Cliente, Chofer
from django.template import RequestContext
from django.db import IntegrityError

"""
class ClienteForm(ModelForm):
	class Meta:
		model = Cliente
"""		

#puede que uno este trabajando duro para obtener cualquier objetivo pero si uno no cuanta con la guia ni la bendicion de jehova para dicha 
#labor de nada serviran nuestros esfuerzos

def clientes(request):
	return render_to_response('cliente.html', {'nothing': 'nothing'}, context_instance=RequestContext(request))

def clienteu(request):
	return render_to_response('untitled.html', {'nothing': 'nothing'}, context_instance=RequestContext(request))

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
	if request.is_ajax():
		pregunta = request.GET['id']
		ti = request.GET['ti']
		pm = request.GET['pm']
		sn = request.GET['sn']
		pa = request.GET['pa']
		sa = request.GET['sa']
		di = request.GET['di']
		cl = request.GET['cl']
		dt = request.GET['dt']
		st = request.GET['st']
		#myList=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]
		myList=[]
		#   for x in st:
		#	print(x)
		myList.append("")  
		a=0
		b=0
		
		while (a<len(st)):		
			if(":" == st[a]):
				a += 1
				while (a<len(st)):
					if('"' == st[a]):
						a += 1
						while (a<len(st)):
							if ('"' == st[a]):
								a += 1
								b += 1
								myList.append("")
								break
							myList[b]+=st[a]
							a += 1
					a += 1
			a += 1
			
		"""
		for i in range (0, len(st)):
			print(i)
			if(":" == st[i]):
				print('Entro')
				for s in range (i, len(st)):
					if('"' == st[s]):
						for w in range (s, len(st)):
							if ('"' == st[w]):
								i=w
								break
							myList[b]+=st[w]
						b+=1
		"""
		print(myList[0])
		#for two colums print(st[12:-214]):
		try:
			r = Cliente.objects.create(TipoIdentificacion=ti, numeroId=pregunta, primeroNombre=pm,segunNombre=sn,primeroApellido=pa,segundoApellido=sa,direccion=di,celular=cl,detalles=dt)
			for x in xrange(1,2):
				o = Chofer.objects.create(cliente_id=pregunta,Identificacion=myList[0],primeroNombre=myList[2],segunNombre=myList[2],primeroApellido=myList[2],segundoApellido=myList[2],direccion=myList[2],celular=myList[2],detalle=myList[2])
			
			#o = Chofer.objects.create(cliente=pregunta,Identificacion=,primeroNombre=,segunNombre=,primeroApellido=,segundoApellido=,direccion=,celular=,detalle=)
			return HttpResponse(
			json.dumps({'respuesta': 'si'}),
			content_type="application/json; charset=uft8"
			)
		except IntegrityError:
			return HttpResponse(
			json.dumps({'respuesta': 'no'}),
			content_type="application/json; charset=uft8"
			)

	""" preguntas = Cliente.objects.all()
		data = serializers.serialize('json', preguntas, fields=('numeroId','primeroNombre'))
		return HttpResponse(data, mimetype='application/json')"""
	"""return HttpResponse(
			json.dumps({'respuestas': data, 'pregunta': id}),
			content_type="application/json; charset=uft8"
			)"""

def guardar_chofer(request):
	cliente = Cliente.objects.get(pk='1100688003')
	print(cliente.primeroNombre)
	"""return HttpResponse(
			json.dumps({'nombre': cliente.TipoIdentificacion, 'descripcion': cliente.numeroId, 'url': cliente.primeroNombre,'nombres': cliente.TipoIdentificacion, 'descripcions': cliente.numeroId, 'urls': cliente.primeroNombre }),
			content_type="application/json; charset=uft8"
			)

			json.dumps({'identifier': 'id','items': [col1: "normal", col2: "normal", col3: "normal", col4: "normal",col5: "normal", col6: "normal"]})
	{"""

	return HttpResponse(
			json.dumps([{"id":0,"name":"Andres","name1":"AL","name2":"Montgomery","name3":"Montgomery","name4":"Montgomery","name5":"Montgomery"},
			{"id":1,"name":"montana","name1":"AK","name2":"Juneau","name3":"Montgomery","name4":"Montgomery","name5":"Montgomery"}]),
			content_type="application/json; charset=uft8"
			)