import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-black">
      <Link href="/hero"> hello</Link>
      <Link href="/taskPage"> Task Page</Link>
    </div>
  );
}
