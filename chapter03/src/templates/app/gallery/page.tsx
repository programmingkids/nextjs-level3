import Image from 'next/image';

import image1 from "@/images/image1.jpg";
import image2 from "@/images/image2.jpg";
import image3 from "@/images/image3.jpg";
import image4 from "@/images/image4.jpg";

export default function Page() {
  return (
    <div className="main">
      <h1 className="p-4 bg-blue-200 text-xl">Gallery</h1>
      <div className="py-4 px-6 flex justify-center flex-wrap gap-4">
        <Image src={image1} alt="image1" className="w-2/5" />
        <Image src={image2} alt="image2" className="w-2/5" />
        <Image src={image3} alt="image3" className="w-2/5" />
        <Image src={image4} alt="image4" className="w-2/5" />
      </div>
    </div>
  );
}
