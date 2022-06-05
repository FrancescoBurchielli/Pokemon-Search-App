from django.http import JsonResponse, HttpResponse
from django.views import View
import requests

def serve_custom_response(pokemon_info_response_raw,pokemon_species_response_raw):

    pokemon_info_response_json = pokemon_info_response_raw.json()
    pokemon_sprites = pokemon_info_response_json.get("sprites","no sprites available");
    if hasattr(pokemon_sprites,"get"):
        pokemon_sprite_url = pokemon_sprites.get("front_default","")

    pokemon_species_response_json = pokemon_species_response_raw.json()
    name = pokemon_species_response_json.get("name", "not provided")
    is_legendary = pokemon_species_response_json.get("is_legendary", False)
    flavor_text_entries = pokemon_species_response_json.get("flavor_text_entries", [{"flavor_text": "not provided"}])
    flavor_text_first_english_entry = next((entry for entry in flavor_text_entries if ('language' in entry and entry['language']['name']=="en")),"no english flavor text entry could be found")
    if hasattr(flavor_text_first_english_entry, "get"):
        description = flavor_text_first_english_entry.get("flavor_text","no description provided")
    else:
        description = "no description provided"
    custom_response_json = {'name': name, 'description': description, 'isLegendary': is_legendary,'spriteUrl':pokemon_sprite_url}
    return custom_response_json


class RetrievePokemon(View):

    def get(self, request, **kwargs):
        pokemon_name = self.kwargs["name"]
        base_url = 'https://pokeapi.co/api/v2/'
        url_pokemon = base_url + 'pokemon/' + pokemon_name
        url_species = base_url + 'pokemon-species/' + pokemon_name
        try:
            pokemon_species_response = requests.get(url_species)
            try:
                pokemon_info_response = requests.get(url_pokemon)
            except requests.exceptions.RequestException:
                return HttpResponse(status=pokemon_info_response.status_code, content=pokemon_info_response.content)
            custom_response = serve_custom_response(pokemon_info_response,pokemon_species_response)
            return JsonResponse(custom_response)
        except requests.exceptions.RequestException:
            return HttpResponse(status=pokemon_species_response.status_code, content=pokemon_species_response.content)
