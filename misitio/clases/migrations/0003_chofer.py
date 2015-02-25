# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('clases', '0002_auto_20150221_0012'),
    ]

    operations = [
        migrations.CreateModel(
            name='Chofer',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('Identificacion', models.CharField(max_length=20, blank=True)),
                ('primeroNombre', models.CharField(max_length=20, blank=True)),
                ('segunNombre', models.CharField(max_length=20, blank=True)),
                ('primeroApellido', models.CharField(max_length=20, blank=True)),
                ('segundoApellido', models.CharField(max_length=20, blank=True)),
                ('direccion', models.CharField(max_length=20, blank=True)),
                ('celular', models.CharField(max_length=60, blank=True)),
                ('detalle', models.CharField(max_length=300, blank=True)),
                ('cliente', models.ForeignKey(to='clases.Cliente')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
