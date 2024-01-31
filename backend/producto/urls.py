from rest_framework import routers
from .api import ProductoViewSet

router = routers.DefaultRouter()

router.register('api/producto', ProductoViewSet, 'producto')


urlpatterns = router.urls