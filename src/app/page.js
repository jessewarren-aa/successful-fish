import HeaderImage from "@element/header/image";
import headerPng from "@img/header.jpg";

export default function Home() {
  return (
    <main>
      <div className="w-full h-[90px] relative border-b-[3px] border-branding-black">
        <HeaderImage
          imageSrc={headerPng.src}
          imageAlt={
            "this is an image of a person's hand-written signature and simple aesthetic background with a keyboard, a mouse, a clipboard, and some plants"
          }
        />
      </div>
    </main>
  );
}
