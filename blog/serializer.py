from dataclasses import field
from .models import Post
from rest_framework import serializers

class PostSerializer(serializers.ModelSerializer):
    slug = serializers.SlugField(read_only=True)
    class Meta:
        model = Post
        fields = '__all__'