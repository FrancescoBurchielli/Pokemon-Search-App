from django.http import JsonResponse, HttpResponse
from django.views import View
import requests

def transform_serve_custom_response(response_raw):
    response_json = response_raw.json()
    name = response_json.get("name", "not provided")
    is_legendary = response_json.get("is_legendary", False)
    flavor_text_entries = response_json.get("flavor_text_entries", [{"flavor_text": "not provided"}])
    description = flavor_text_entries[0].get("flavor_text", "not provided")
    custom_response_json = {'name': name, 'description': description, 'is_legendary': is_legendary}
    return custom_response_json

class RetrievePokemon(View):

    def get(self, request, **kwargs):
        pokemon_name = self.kwargs["name"]
        base_url = 'https://pokeapi.co/api/v2/pokemon-species/'
        url = base_url + pokemon_name + "/"
        try:
            response = requests.get(url)
            custom_response = transform_serve_custom_response(response)
            return JsonResponse(custom_response)
        except requests.exceptions.RequestException:
            return HttpResponse(status=response.status_code, content=response.content)
