from django.db import models
from django.core.urlresolvers import reverse
# Create your models here.

class Cliente(models.Model):
    TIPOS_IDE = (
        ('CC', 'Cedula de ciudania'),
        ('CE', 'Cedula de extranjeria'),
        ('TI', 'Targeta de identidad'),
    )
    TipoIdentificacion = models.CharField(max_length=3, choices=TIPOS_IDE)
    numeroId = models.CharField(max_length=20, primary_key=True)
    primeroNombre = models.CharField(max_length=20)
    segunNombre = models.CharField(max_length=20, blank=True)
    primeroApellido = models.CharField(max_length=20, blank=True)
    segundoApellido = models.CharField(max_length=20)
    direccion = models.CharField(max_length=20)
    celular = models.CharField(max_length=60)
    detalles = models.CharField(max_length=300, blank=True)
    
    def __unicode__(self):
    	return self.numeroId

    def get_absolute_url(self):
    	return reverse('clientes', kwargs={'pk':self.pk})


class Chofer(models.Model):
    cliente = models.ForeignKey(Cliente)
    Identificacion = models.CharField(max_length=20, blank=True)
    primeroNombre = models.CharField(max_length=20, blank=True)
    segunNombre = models.CharField(max_length=20, blank=True)
    primeroApellido = models.CharField(max_length=20, blank=True)
    segundoApellido = models.CharField(max_length=20, blank=True)
    direccion = models.CharField(max_length=20, blank=True)
    celular = models.CharField(max_length=60, blank=True)
    detalle = models.CharField(max_length=300, blank=True)
    
    def __unicode__(self):
        return self.id



class HistoriaVehiculo(models.Model):
    cliente = models.ForeignKey(Cliente)
    chofer = models.ForeignKey(Chofer)
    nombre = models.CharField(max_length=50, blank=True)
    placa = models.CharField(max_length=50, blank=True)
    fecha = models.DateTimeField(auto_now=False, auto_now_add=False)
    valorTotal = models.CharField(max_length=20, blank=True)
    valorTotalConDescuento = models.CharField(max_length=20, blank=True)
    
    def __unicode__(self):
        return self.id

    def get_absolute_url(self):
        return reverse('historiavehiculo', kwargs={'pk':self.pk})


class DetalleHistoriaVehiculo(models.Model):
    codhistori = models.ForeignKey(HistoriaVehiculo)
    cantidad = models.CharField(max_length=12, blank=True)
    marca = models.CharField(max_length=12, blank=True)
    referencia = models.CharField(max_length=30, blank=True)
    detalle = models.CharField(max_length=20, blank=True)
    rueda = models.CharField(max_length=30, blank=True)
    valorunitario = models.CharField(max_length=30, blank=True)
    valortotal = models.CharField(max_length=30, blank=True)
    valordescuento = models.CharField(max_length=30, blank=True)

    def __unicode__(self):
        return self.id

    def get_absolute_url(self):
        return reverse('detallehistoriavehiculo', kwargs={'pk':self.pk})

    