'use client';

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const handleClickBlue = (e:React.MouseEvent<HTMLButtonElement>) => {
    router.push('/color/blue');
  }

  const handleClickRed = (e:React.MouseEvent<HTMLButtonElement>) => {
    router.replace('/color/red');
  }
  
  return (
    <div className="main">
      <h1 className="p-4 bg-blue-200 text-xl">Hello</h1>
      <div className="py-4 px-6 flex justify-center gap-4">
        <button onClick={handleClickBlue} className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">Blue</button>
        <button onClick={handleClickRed} className="bg-rose-500 hover:bg-rose-800 text-white font-bold py-2 px-4 rounded">Read</button>
      </div>
    </div>
  );
}
