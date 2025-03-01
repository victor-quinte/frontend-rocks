const data = {
  abilities: ["rock-head", "sturdy"],
  id: 74,
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

      <div className="bg-white p-12">
        <div className="flex justify-between">
          {/* TODO: Implement logic to handle previous and next pokemon */}
          <div>Prev</div>
          <div>Next</div>
        </div>

        <h1 className="text-4xl text-center text-gray-900 mb-8 tracking-wide font-bold">
          {data.name} - {data.id}
        </h1>

        <div className="grid grid-cols-2">
          <div>
            <div className="bg-gray-100 p-3 rounded-lg flex justify-center">
              <img
                src={data.image}
                alt={data.name}
                className="w-36 h-36 object-contain"
              />
            </div>
          </div>

          <div className="px-4 grid grid-cols-2 grid-rows-auto text-lg text-gray-700 mt-3 space-y-2">
            <div>
              <div className="font-bold">Height</div> {data.height}
            </div>

            <div>
              <div className="font-bold">Weight</div> {data.weight}
            </div>

            <div>
              <div className="font-bold">HP</div> {data.hp}
            </div>

            <div>
              <div className="font-bold">Attack</div> {data.attack}
            </div>

            <div>
              <div className="font-bold">Types:</div>
              <div className="justify-center space-x-2">
                {data.types.map((type) => (
                  <span
                    key={type}
                    className={`font-bold text-white px-3 py-1 rounded-full text-xs ${typeColors[type.toLowerCase()] || "bg-gray-500"}`}
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="font-bold">Abilities</div>
              {data.abilities.join(", ")}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
