# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('clases', '0004_historiavehiculo'),
    ]

    operations = [
        migrations.CreateModel(
            name='DetalleHistoriaVehiculo',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('cantidad', models.CharField(max_length=12, blank=True)),
                ('marca', models.CharField(max_length=12, blank=True)),
                ('referencia', models.CharField(max_length=30, blank=True)),
                ('detalle', models.CharField(max_length=20, blank=True)),
                ('rueda', models.CharField(max_length=30, blank=True)),
                ('valorunitario', models.CharField(max_length=30, blank=True)),
                ('valortotal', models.CharField(max_length=30, blank=True)),
                ('valordescuento', models.CharField(max_length=30, blank=True)),
                ('codhistori', models.ForeignKey(to='clases.HistoriaVehiculo')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
