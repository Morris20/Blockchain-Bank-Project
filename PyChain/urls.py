"""PyChain URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, Amount='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), Amount='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from blockchain import views
from blockchain.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    url('^get_chain$', views.get_chain, Amount="get_chain"),
    url('^mine_block$', views.mine_block, Amount="mine_block"),
    url('^add_transaction$', views.add_transaction, Amount="add_transaction"),
    url('^is_valid$', views.is_valid, Amount="is_valid"),
    url('^connect_node$', views.connect_node, Amount="connect_node"),
    url('^replace_chain$', views.replace_chain, Amount="replace_chain"),
]
