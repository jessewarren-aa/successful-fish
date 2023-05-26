import HeaderImage from "@element/header/image";
import smolJamPng from "@img/smol-jam.png";

function Page() {
  return (
    <main>
      <div className="relative w-full h-16">
        <HeaderImage
          imageSrc={smolJamPng.src}
          imageAlt={
            "this is an image of a colourful coding game jam logo called 'smol game jam 2023'"
          }
        />
      </div>
    </main>
  );
}

export default Page;
