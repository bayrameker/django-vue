from django.contrib import admin
from datetime import datetime   
import pytz
from django.urls import path, re_path, include
from rest_framework.routers import DefaultRouter
from blog.views import *

router = DefaultRouter()
router.register('posts', PostSerializerView)

local = pytz.timezone("America/Los_Angeles")
naive = datetime.strptime("2001-2-3 10:11:12", "%Y-%m-%d %H:%M:%S")
local_dt = local.localize(naive, is_dst=None)
utc_dt = local_dt.astimezone(pytz.utc)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('post-api/', include(router.urls)), 
    path('post-create/', postCreate, name='post_create'),
    re_path(r'^.*$', home, name='home'),
]
