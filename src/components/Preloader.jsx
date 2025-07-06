
export default function Preloader() {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white" />
    </div>
  );
}