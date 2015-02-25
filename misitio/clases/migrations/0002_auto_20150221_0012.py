# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('clases', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('TipoIdentificacion', models.CharField(blank=True, max_length=3, choices=[(b'CC', b'Cedula de ciudania'), (b'CE', b'Cedula de extranjeria'), (b'TI', b'Targeta de identidad')])),
                ('numeroId', models.CharField(max_length=20, serialize=False, primary_key=True, blank=True)),
                ('primeroNombre', models.CharField(max_length=20, blank=True)),
                ('segunNombre', models.CharField(max_length=20, blank=True)),
                ('primeroApellido', models.CharField(max_length=20, blank=True)),
                ('segundoApellido', models.CharField(max_length=20, blank=True)),
                ('direccion', models.CharField(max_length=20, blank=True)),
                ('celular', models.CharField(max_length=60, blank=True)),
                ('detalles', models.CharField(max_length=300, blank=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.DeleteModel(
            name='terceros',
        ),
    ]
