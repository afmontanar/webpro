# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('clases', '0009_auto_20150528_0112'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chofer',
            name='cliente',
            field=models.ForeignKey(to='clases.Cliente'),
            preserve_default=True,
        ),
    ]
