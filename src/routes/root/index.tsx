import { Link } from "react-router";
import { Card } from "../../components/Grid/Card";

export const RootRoute = () => {
  return (
    <>
      <header className="py-2 px-4 bg-white shadow-md border-b-4 border-yellow-400 sticky top-0 z-10">
        <img src="/logo.png" className="w-60 h-auto" />
      </header>

      <main className="flex flex-wrap items-center justify-center gap-4 p-8">
        {data.map((item) => (
          <Link to={`/dettaglio/${item.id}`} key={item.id}>
            <Card key={item.id} {...item} />
          </Link>
        ))}
      </main>
    </>
  );
};

const data = [
  {
    id: 1,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    name: "Bulbasaur",
    types: ["grass", "poison"],
  },
  {
    id: 4,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    name: "Charmander",
    types: ["fire"],
  },
  {
    id: 7,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    name: "Squirtle",
    types: ["water"],
  },
  {
    id: 10,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
    name: "Caterpie",
    types: ["bug"],
  },
  {
    id: 25,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    name: "Pikachu",
    types: ["electric"],
  },
  {
    id: 74,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png",
    name: "Geodude",
    types: ["rock", "ground"],
  },
];
