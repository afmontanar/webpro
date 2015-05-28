# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('clases', '0008_chofer_cliente'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chofer',
            name='cliente',
            field=models.CharField(max_length=20),
            preserve_default=True,
        ),
    ]
