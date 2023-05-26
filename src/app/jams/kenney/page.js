import HeaderImage from "@element/header/image";
import kenneyJamPng from "@img/kenney-jam.png";

function Page() {
  return (
    <main>
      <div className="relative w-full h-16">
        <HeaderImage
          imageSrc={kenneyJamPng.src}
          imageAlt={
            "this is an image of a colourful coding game jam logo called 'smol game jam 2023'"
          }
          doubleSize={true}
        />
      </div>
    </main>
  );
}

export default Page;
