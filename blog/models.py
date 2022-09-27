from operator import add
from django.db import models

class Post(models.Model):
    class Meta:
        verbose_name = 'Post'
        verbose_name_plural = "My Post"

    name = models.CharField(max_length=100)
    post = models.TextField(max_length=400)
    slug = models.SlugField(max_length=250, unique=True)
    date = models.DateTimeField(auto_now_add=add)

    def __str__(self):
        return self.name
