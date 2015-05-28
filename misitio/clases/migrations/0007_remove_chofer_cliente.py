# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('clases', '0006_auto_20150319_1605'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='chofer',
            name='cliente',
        ),
    ]
