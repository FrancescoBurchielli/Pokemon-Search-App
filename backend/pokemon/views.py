from django.http import JsonResponse, HttpResponse
from django.views import View
import requests

def serve_custom_response(response_raw):
    response_json = response_raw.json()
    name = response_json.get("name", "not provided")
    is_legendary = response_json.get("is_legendary", False)
    flavor_text_entries = response_json.get("flavor_text_entries", [{"flavor_text": "not provided"}])
    flavor_text_first_english_entry = next((entry for entry in flavor_text_entries if ('language' in entry and entry['language']['name']=="en")),"no english flavor text entry could be found")
    if hasattr(flavor_text_first_english_entry, "get"):
        description = flavor_text_first_english_entry.get("flavor_text","no description provided")
    else:
        description = "no description provided"
    custom_response_json = {'name': name, 'description': description, 'is_legendary': is_legendary}
    return custom_response_json

class RetrievePokemon(View):

    def get(self, request, **kwargs):
        pokemon_name = self.kwargs["name"]
        base_url = 'https://pokeapi.co/api/v2/pokemon-species/'
        url = base_url + pokemon_name + "/"
        try:
            response = requests.get(url)
            custom_response = serve_custom_response(response)
            return JsonResponse(custom_response)
        except requests.exceptions.RequestException:
            return HttpResponse(status=response.status_code, content=response.content)
