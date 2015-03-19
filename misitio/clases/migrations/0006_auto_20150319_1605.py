# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('clases', '0005_detallehistoriavehiculo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cliente',
            name='TipoIdentificacion',
            field=models.CharField(max_length=3, choices=[(b'CC', b'Cedula de ciudania'), (b'CE', b'Cedula de extranjeria'), (b'TI', b'Targeta de identidad')]),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='cliente',
            name='celular',
            field=models.CharField(max_length=60),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='cliente',
            name='direccion',
            field=models.CharField(max_length=20),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='cliente',
            name='numeroId',
            field=models.CharField(max_length=20, serialize=False, primary_key=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='cliente',
            name='primeroNombre',
            field=models.CharField(max_length=20),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='cliente',
            name='segundoApellido',
            field=models.CharField(max_length=20),
            preserve_default=True,
        ),
    ]
