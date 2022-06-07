import os
import requests
from django.http import JsonResponse, HttpResponse
from django.views import View


def get_pokemon_flavor_text(flavor_text_entries):
    flavor_text_first_english_entry = next((entry for entry in flavor_text_entries if (
            'language' in entry and 'name' in entry['language'] and entry['language']['name'] == "en")),
                                           None)
    if flavor_text_first_english_entry is not None:
        description = flavor_text_first_english_entry.get("flavor_text", "no description provided")
    else:
        description = "no description provided"
    return description


def get_pokemon_sprite_dict(pokemon_info_response_raw):
    pokemon_info_response_json = pokemon_info_response_raw.json()
    pokemon_sprites = pokemon_info_response_json.get("sprites", None)
    if pokemon_sprites is not None:
        pokemon_sprite_url = pokemon_sprites.get("front_default", "")
    else:
        pokemon_sprite_url = ""
    pokemon_sprite_url_dict = {'spriteUrl': pokemon_sprite_url}
    return pokemon_sprite_url_dict


def get_pokemon_species_info_dict(pokemon_species_response_raw):
    pokemon_species_response_json = pokemon_species_response_raw.json()
    name = pokemon_species_response_json.get("name", "not provided")
    is_legendary = pokemon_species_response_json.get("is_legendary", False)
    flavor_text_entries = pokemon_species_response_json.get("flavor_text_entries",
                                                            None)  # [{"flavor_text": "not provided"}]
    if flavor_text_entries is not None:
        description = get_pokemon_flavor_text(flavor_text_entries)
    else:
        description = "no description provided"
    pokemon_species_info_dict = {'name': name, 'description': description, 'isLegendary': is_legendary}
    return pokemon_species_info_dict


def get_pokemon_species_dict_with_sprite_url(pokemon_info_response_raw, pokemon_species_response_raw):
    if pokemon_info_response_raw is not None:
        pokemon_sprite_url_dict = get_pokemon_sprite_dict(pokemon_info_response_raw)
    else:
        pokemon_sprite_url_dict = {'spriteUrl': ""}
    pokemon_species_info_dict = get_pokemon_species_info_dict(pokemon_species_response_raw)
    pokemon_species_info_dict.update(pokemon_sprite_url_dict)
    return pokemon_species_info_dict


class RetrievePokemon(View):
    def get(self, request, **kwargs):
        pokemon_name = self.kwargs["name"]
        url_species = os.environ.get('POKEMON_API_SPECIES_URL') + pokemon_name
        url_pokemon = os.environ.get('POKEMON_API_POKEMON_URL') + pokemon_name
        try:
            pokemon_species_response = requests.get(url_species)
            pokemon_species_response.raise_for_status()
            try:
                pokemon_info_response = requests.get(url_pokemon)
                pokemon_info_response.raise_for_status()
            except requests.exceptions.HTTPError or requests.exceptions.RequestException:
                pokemon_info_response = None
            pokemon_species_dict_with_sprite_url = get_pokemon_species_dict_with_sprite_url(pokemon_info_response
                                                                                            , pokemon_species_response)
            return JsonResponse(pokemon_species_dict_with_sprite_url)
        except requests.exceptions.HTTPError or requests.exceptions.RequestException:
            return HttpResponse(status=pokemon_species_response.status_code, content=pokemon_species_response.content)
