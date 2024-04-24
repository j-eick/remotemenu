import Link from "next/link";
import React from "react";

export default function OrderSummary() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Link href={"/menu"}>⬅️ go back</Link>
      <h1 className="text-gray-900">OrderSummary</h1>
      <p>You ordered...</p>
      <Link href={"/menu"}>order 💰</Link>
    </main>
  );
}
