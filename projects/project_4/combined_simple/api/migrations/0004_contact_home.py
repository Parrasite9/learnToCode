# Generated by Django 3.1.6 on 2021-03-13 04:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_location'),
    ]

    operations = [
        migrations.AddField(
            model_name='contact',
            name='home',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='inhabitants', to='api.location'),
        ),
    ]