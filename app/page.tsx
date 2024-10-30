import Link from "next/link";

export default function Page() {
  return (
    <div className="mainBg h-[calc(100vh-90px)]
    flex
    flex-col
    justify-center
    items-center
    gap-10
    ">
      <h1 className="text-2xl lg:text-6xl font-bold text-black-600">Welcome to Next.js class</h1>

      <h2 className="lg:text-3xl font-bold text-blue-500">ToDo List</h2>

      <Link className="
      bg-red-600
      p-1 rounded
      text-white
      text-2xl
      px-4
      hover:bg-red-700
      " href={'/todo'}>Get Started</Link>
    </div>
  );
}
