import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-gray-900">LandingPage</h1>  
      <p>Welcome to this place.</p>
      <Link href={"/menu"}>click here for the menu</Link>
    </main>
  );
}
