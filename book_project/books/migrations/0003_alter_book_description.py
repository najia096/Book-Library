# Generated by Django 5.0.7 on 2024-07-14 13:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0002_book_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='description',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
