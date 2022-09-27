from django.urls import path, re_path
from .views import *

app_name = 'blog'

urlpatterns = [
    path('', home, name='home'),
    # apis

]