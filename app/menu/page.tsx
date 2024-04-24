import Link from "next/link";
import React from "react";

export default function Menu() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex gap-5">
        <div>Menu</div>
        <Link href={"/ordersummary"}>[number of dishes]</Link>
      </div>
    </main>
  );
}
