const data = {
  abilities: ["rock-head", "sturdy"],
  image:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png",
  name: "Geodude",
  height: 40,
  types: ["rock", "ground"],
  weight: 200,
  attack: 80,
  hp: 40,
};

const typeColors: { [key: string]: string } = {
  fire: "bg-red-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  electric: "bg-yellow-400",
  psychic: "bg-pink-500",
  ice: "bg-cyan-400",
  dragon: "bg-purple-700",
  dark: "bg-gray-700",
  fairy: "bg-pink-300",
  normal: "bg-gray-400",
  fighting: "bg-red-700",
  flying: "bg-indigo-400",
  poison: "bg-purple-500",
  ground: "bg-yellow-600",
  rock: "bg-yellow-800",
  bug: "bg-green-700",
  ghost: "bg-indigo-700",
  steel: "bg-gray-500",
};

export const DetailRoute: React.FC = () => {
  return (
    <>
      <header className="py-2 px-4 bg-white shadow-md border-b-4 border-yellow-400 sticky top-0 z-10">
        <img src="/logo.png" className="w-60 h-auto" />
      </header>

      <div className="bg-white border border-gray-300 rounded-lg shadow-xl p-6 w-72 text-center relative">
        <h4 className="text-2xl text-gray-900 uppercase mb-3 tracking-wide font-bold">
          {data.name}
        </h4>
        <div className="bg-gray-100 p-3 rounded-lg flex justify-center">
          <img
            src={data.image}
            alt={data.name}
            className="w-36 h-36 object-contain"
          />
        </div>
        <div className="text-sm text-gray-700 mt-3 space-y-2">
          <div className="flex justify-center space-x-2 mt-2">
            {data.types.map((type) => (
              <span
                key={type}
                className={`font-bold text-white px-3 py-1 rounded-full text-xs ${typeColors[type.toLowerCase()] || "bg-gray-500"}`}
              >
                {type}
              </span>
            ))}
          </div>
          <p>
            <span className="font-bold">Height:</span> {data.height}
          </p>
          <p>
            <span className="font-bold">Weight:</span> {data.weight}
          </p>
          <p>
            <span className="font-bold">Attack:</span> {data.attack}
          </p>
          <p>
            <span className="font-bold">HP:</span> {data.hp}
          </p>
          <p className="mt-2">
            <span className="font-bold">Abilities:</span>{" "}
            {data.abilities.join(", ")}
          </p>
        </div>
      </div>
    </>
  );
};
