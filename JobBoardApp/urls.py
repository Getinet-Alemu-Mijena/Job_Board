from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from .views import LandingPage

urlpatterns = [
    path('LandingPage/', LandingPage, name='landing_page'),
]
