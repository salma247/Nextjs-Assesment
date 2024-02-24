export default function Page({ params }: { params: { title: string } }) {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-tl from-slate-50 to-blue-200">
      <h1 className="text-4xl">Welcome to {params.title}</h1>
    </div>
  );
}