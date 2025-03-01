import { Link, useParams } from "react-router";

export const DetailRoute = () => {
    const { id } = useParams();
  return (
    <div className="h-dvh flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-lg">
        <h1 className="text-center font-bold text-3xl text-stone-700">
          Pagina di dettaglio {id}
        </h1>

        <div className="flex justify-center mt-4">
          <Link to="/" className="text-sm text-blue-400 hover:underline">
            Torna alla Home
          </Link>
        </div>
      </div>
    </div>
  );
};
