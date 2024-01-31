from rest_framework import routers
from .api import ComidaViewSet, ComidaViewSetBasic

router = routers.DefaultRouter()

router.register('api/tipo_de_comidas', ComidaViewSet, 'comida')
router.register('api/comida', ComidaViewSetBasic, 'comida')

urlpatterns = router.urls