import Image from "next/image";
import header from "@img/header.jpg";

export default function Home() {
  return (
    <main>
      <div className="w-full h-[90px] relative border-b-[3px] border-branding-black">
        <Image
          src={header.src}
          alt="header image of a signature and simple aesthetic background with keyboard, mouse, clipboard, and plants"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </main>
  );
}
