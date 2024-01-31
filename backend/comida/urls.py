from rest_framework import routers
from .api import ComidaViewSet

router = routers.DefaultRouter()

router.register('api/tipo_de_comidas', ComidaViewSet, 'comida')

urlpatterns = router.urls