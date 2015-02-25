# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('clases', '0003_chofer'),
    ]

    operations = [
        migrations.CreateModel(
            name='HistoriaVehiculo',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('nombre', models.CharField(max_length=50, blank=True)),
                ('placa', models.CharField(max_length=50, blank=True)),
                ('fecha', models.DateTimeField()),
                ('valorTotal', models.CharField(max_length=20, blank=True)),
                ('valorTotalConDescuento', models.CharField(max_length=20, blank=True)),
                ('chofer', models.ForeignKey(to='clases.Chofer')),
                ('cliente', models.ForeignKey(to='clases.Cliente')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
