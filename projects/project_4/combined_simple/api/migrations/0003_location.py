# Generated by Django 3.1.6 on 2021-03-13 04:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_company'),
    ]

    operations = [
        migrations.CreateModel(
            name='Location',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('street', models.CharField(max_length=64)),
                ('city', models.CharField(max_length=32)),
                ('state', models.CharField(max_length=2)),
            ],
        ),
    ]
