import axios from "axios";

const BASE_URL = "http://localhost:8000/backend/pokemon/";

export const fetchPokemon = async (name: string) => {
  try {
    return await axios.get(`${BASE_URL}/${name}`);
  } catch (e) {
    return {};
  }
};

jest.mock("axios");

describe("fetchPokemon", () => {
  describe("when API call is successful", () => {
    it("should return a pokemon object", async () => {
      const name = "pikachu";
      const pikachuResponse = {
        name: "pikachu",
        description:
          "When several of\nthese POKéMON\ngather, their\felectricity could\nbuild and cause\nlightning storms.",
        isLegendary: false,
        spriteUrl:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      };
      (axios.get as jest.Mock).mockResolvedValueOnce(pikachuResponse);
      const result = await fetchPokemon(name);
      console.log(result);
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/${name}`);
      expect(result).toEqual(pikachuResponse);
    });
  });

  describe("when API call fails", () => {
    it("should return an empty object", async () => {
      const name = "sdsdsdsds";
      const message = "error";
      (axios.get as jest.Mock).mockRejectedValueOnce(new Error(message));
      const result = await fetchPokemon(name);
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/${name}`);
      expect(result).toEqual({});
    });
  });
});
