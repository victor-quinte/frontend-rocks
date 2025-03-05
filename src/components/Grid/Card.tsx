import { getTypeColor } from "../../routes/utils/getTypeColor";

interface Props {
  id: number;
  image: string;
  name: string;
  types: string[];
}

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
            className={`font-bold text-white px-3 py-1 rounded-md text-xs ${getTypeColor(type)}`}
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  </div>
);
