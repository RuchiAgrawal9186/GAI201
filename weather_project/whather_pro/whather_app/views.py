from django.http import JsonResponse
# from . import weather_data
from django.views.decorators.csrf import csrf_exempt
import json
from .weather_data import weather_data



def weather_view(request, city):
    city_data = weather_data.get(city)
    if city_data:
        return JsonResponse(city_data)
    else:
        return JsonResponse({'error': 'City not found'}, status=404)


@csrf_exempt
def weather_create(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        city = data.get('city')
        weather_data[city] = data
        return JsonResponse(data, status=201)
    return JsonResponse({'error': 'Invalid request'}, status=400)

@csrf_exempt
def weather_update(request, city):
    if request.method == 'PUT':
        data = json.loads(request.body)
        if city in weather_data:
            weather_data[city].update(data)
            return JsonResponse(weather_data[city], status=200)
        return JsonResponse({'error': 'City not found'}, status=404)
    return JsonResponse({'error': 'Invalid request'}, status=400)

@csrf_exempt
def weather_delete(request, city):
    if request.method == 'DELETE':
        if city in weather_data:
            del weather_data[city]
            return JsonResponse({}, status=204)
        return JsonResponse({'error': 'City not found'}, status=404)
    return JsonResponse({'error': 'Invalid request'}, status=400)