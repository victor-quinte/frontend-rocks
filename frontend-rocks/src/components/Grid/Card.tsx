interface Props {
  id: number;
  image: string;
  name: string;
  types: string[];
}

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

export const Card: React.FC<Props> = (props) => (
  <div className="bg-white border border-gray-300 rounded-lg shadow-md relative w-2xs flex items-center justify-center h-80">
    <h4 className="text-xl text-gray-900 tracking-wide font-bold absolute left-4 top-2">
      {props.name} -{" "}
      <span className="text-gray-700 font-medium">{props.id}</span>
    </h4>

    <img
      src={props.image}
      alt={props.name}
      className="w-36 h-36 object-contain"
    />

    <div className="text-sm text-gray-700 absolute right-2 bottom-2">
      <div className="flex justify-center space-x-2">
        {props.types.map((type) => (
          <span
            key={type}
            className={`font-bold text-white px-3 py-1 rounded-md text-xs ${typeColors[type.toLowerCase()] || "bg-gray-500"}`}
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  </div>
);
