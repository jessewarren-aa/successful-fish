import Image from "next/image";
import clsx from "clsx";

export default function HeaderImage({ imageSrc, imageAlt, doubleSize }) {
  return (
    <div
      className={clsx(
        "w-full relative border-2 border-branding-black",
        doubleSize ? "h-[194px]" : "h-[97px]"
      )}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        className="object-center object-cover box-content"
        width={375}
        height={1}
      />
    </div>
  );
}
