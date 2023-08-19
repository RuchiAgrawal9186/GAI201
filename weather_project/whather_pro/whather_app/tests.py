from django.test import TestCase
from django.urls import reverse
import json

class WeatherViewTest(TestCase):

    def test_valid_city(self):
        response = self.client.get(reverse('weather', kwargs={'city': 'San Francisco'}))
        self.assertEqual(response.status_code, 200)
        expected_data = {'temperature': 14, 'weather': 'Cloudy'}  # Update this line
        self.assertJSONEqual(str(response.content, encoding='utf8'), expected_data)
    
    
    def test_invalid_city(self):
        response = self.client.get(reverse('weather', kwargs={'city': 'InvalidCity'}))
        self.assertEqual(response.status_code, 404)
    
    def test_add_new_weather_data(self):
        data = {'city': 'Chicago', 'temperature': 18, 'weather': 'Partly Cloudy'}
        response = self.client.post(reverse('weather-list'), data=json.dumps(data), content_type='application/json')
        self.assertEqual(response.status_code, 201)
    
    def test_delete_weather_data(self):
        response = self.client.delete(reverse('weather-delete', kwargs={'city': 'New York'}))
        self.assertEqual(response.status_code, 204)

    # def test_update_weather_data(self):
    #     updated_data = {'temperature': 22, 'weather': 'Sunny'}
    #     response = self.client.put(reverse('weather-update', kwargs={'city': 'San Francisco'}), data=json.dumps(updated_data), content_type='application/json')
    #     self.assertEqual(response.status_code, 200)
    #     self.assertEqual(response.json(), updated_data)