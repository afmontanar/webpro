# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('clases', '0007_remove_chofer_cliente'),
    ]

    operations = [
        migrations.AddField(
            model_name='chofer',
            name='cliente',
            field=models.ForeignKey(default=32, to='clases.Cliente'),
            preserve_default=False,
        ),
    ]
