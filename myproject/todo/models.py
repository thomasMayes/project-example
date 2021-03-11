from django.db import models


# Create your models here.


class Todo(models.Model):
    title = models.CharField(max_length=20)
    description = models.CharField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)
