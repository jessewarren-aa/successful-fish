import Image from "next/image";
import clsx from "clsx";

export default function HeaderImage({ imageSrc, imageAlt, doubleSize }) {
  return (
    <div
      className={clsx(
        "w-full relative border-2 border-branding-black",
        doubleSize ? "h-[180px]" : "h-[90px]"
      )}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
}
