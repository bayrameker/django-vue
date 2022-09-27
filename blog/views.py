from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework import permissions
from . import serializer as s
from . import models as m
from rest_framework import viewsets
from rest_framework.response import Response


def home(request):
    return render(request, 'index.html')


# @api_view(["GET"])
# @permission_classes((permissions.AllowAny, ))
# def PostSerializerView(request):
#     post = m.Post.objects.all()
#     serializer = s.PostSerializer(post, many=True)
#     return Response(serializer.data)


class PostSerializerView(viewsets.ModelViewSet):
    queryset = m.Post.objects.all()
    lookup_field = 'slug'
    serializer_class = s.PostSerializer
# api create


@api_view(["POST"])
@permission_classes((permissions.AllowAny,))
def postCreate(request):
    serializer = s.PostSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)
