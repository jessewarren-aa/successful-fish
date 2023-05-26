import Image from "next/image";
import header from "@img/header.jpg";

export default function Home() {
  return (
    <main>
      <div className="w-full h-[90px] relative border-b-[3px] border-branding-black">
        <Image
          src={header.src}
          alt="this is an image of a person's hand-written signature and simple aesthetic background with a keyboard, a mouse, a clipboard, and some plants"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </main>
  );
}
