import Image from "next/image";
import Logo from "/public/logo.svg";
import PokemonPlaceholder from "/public/pokemon-placeholder.svg";
import IconWeight from "/public/icon-weight.svg";
import IconSize from "/public/icon-size.svg";
import { pokeAPI } from "@/services/pokeAPI";
import { GetServerSidePropsContext } from "next";

interface PokemonPage {
  pokemon: {
    name: string;
    types: { type: { name: string } }[];
    weight: number;
    height: number;
    locations: string[];
    sprite: string;
    color: string;
  } | null;
  slug: string;
}

export default function PokemonPage({ pokemon, slug }: PokemonPage) {
  return (
    <main
      style={{ background: `linear-gradient(to right, ${pokemon?.color}, ${pokemon?.color})` }}
      className="h-[100vh] flex flex-col p-[70px] pb-[0]"
    >
      <a href="/" className="flex items-center gap-4 drop-shadow-lg">
        <Image src={Logo} width={60} height={60} alt="logo" />
        <h1 className="uppercase text-[31px] text-white font-bold">Pokédex</h1>
      </a>

      {pokemon ? (
        <div className="bg-white w-full h-full mt-[100px] flex justify-center items-center gap-[150px]">
          <div className="w-[499px] h-[549px] relative border border-stone-400 rounded-lg">
            <Image src={pokemon.sprite} layout="fill" alt="" />
          </div>
          <div>
            <h2 className="text-[31px] font-bold uppercase">{pokemon.name}</h2>
            <div className="flex gap-[19px] mt-[35px]">
              {pokemon.types.map((element, index) => (
                <span
                  key={index}
                  className="text-white font-light text-[22px] bg-green-950 p-[10px] rounded-full uppercase"
                >
                  {element.type.name}
                </span>
              ))}
            </div>
            <div className="flex gap-[54px] text-stone-400 mt-[51px]">
              <div className="w-[180px] h-[127px] border border-stone-400 flex flex-col items-center justify-center text-[31px] rounded-lg">
                <div className="flex gap-2">
                  <Image src={IconWeight} alt="" />
                  <p>PESO</p>
                </div>
                <p>{pokemon.weight}</p>
              </div>
              <div className="px-[10px] h-[127px] border border-stone-400 flex flex-col items-center justify-center text-[31px] rounded-lg">
                <div className="flex gap-2">
                  <Image src={IconSize} alt="" />
                  <p>TAMANHO</p>
                </div>
                <p>{pokemon.height}</p>
              </div>
            </div>
            <p className="mt-[51px] text-[31px] font-light">
              Pokémon encontrado nos ambientes:
            </p>
            <ul className="mt-[8px]">
              {pokemon.locations.map((location, index) => (
                <>{index < 5 ? <li key={index}>{location}</li> : <></>}</>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="bg-white w-full h-full mt-[100px] flex justify-center items-center gap-[150px]">
          <h1 className="text-[31px]">Pokemon não encontrado!</h1>
        </div>
      )}
    </main>
  );
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { slug } = ctx.params as { slug: string };

  try {
    //Obter Pokemon
    const res = await pokeAPI.get(`pokemon/${slug}`);
    const { name, types, weight, height, id, sprites } = res.data;

    //Obter Locais do Pokemon
    const location_area_encounters = await pokeAPI.get(
      `pokemon/${id}/encounters`
    );
    const locations = location_area_encounters.data.map(
      (location: { location_area: { name: string } }) =>
        location.location_area.name
    );

    //Obter cor do pokemon
    const species = await pokeAPI.get(`pokemon-species/${id}`);
    const color = species.data.color.name;

    return {
      props: {
        pokemon: {
          name,
          types,
          weight,
          height,
          locations: locations || [],
          sprite: sprites.front_default,
          color,
        },
        slug,
      },
    };
  } catch (error) {
    return {
      props: {
        pokemon: null,
        slug,
      },
    };
  }
};
