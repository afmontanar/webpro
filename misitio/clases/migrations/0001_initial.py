# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='terceros',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('idTer', models.CharField(max_length=12)),
                ('dig_ter', models.CharField(max_length=1)),
                ('tpo_ter', models.CharField(max_length=2)),
                ('ape1ter', models.CharField(max_length=15)),
                ('ape2ter', models.CharField(max_length=15)),
                ('nom1ter', models.CharField(max_length=15)),
                ('nom2ter', models.CharField(max_length=15)),
                ('des_ter', models.CharField(max_length=60)),
                ('swebter', models.CharField(max_length=40)),
                ('mailter', models.CharField(max_length=60)),
                ('tel1ter', models.CharField(max_length=12)),
                ('tel2ter', models.CharField(max_length=12)),
                ('tel3ter', models.CharField(max_length=12)),
                ('dir1ter', models.CharField(max_length=40)),
                ('dir2ter', models.CharField(max_length=40)),
                ('muniter', models.CharField(max_length=5)),
                ('depater', models.CharField(max_length=5)),
                ('paister', models.CharField(max_length=5)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
