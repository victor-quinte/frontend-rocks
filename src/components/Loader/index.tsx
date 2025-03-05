export const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white space-y-6">
      <div className="animate-spin rounded-full h-16 w-16 border-2 border-white border-b-yellow-400"></div>
      <div>Loading...</div>
    </div>
  );
};
