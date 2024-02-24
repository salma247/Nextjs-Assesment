export default function Page({ params }: { params: { title: string } }) {
  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-4xl">Welcome to {params.title}</h1>
    </div>
  );
}