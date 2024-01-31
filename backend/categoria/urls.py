from rest_framework import routers
from .api import CategoriaViewSet

router = routers.DefaultRouter()

router.register('api/categoria', CategoriaViewSet, 'categoria')

urlpatterns = router.urls