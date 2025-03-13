import Image from "next/image";
const BlurredImage = ({src}) => {
  const cloudinaryUrl = `https://res.cloudinary.com/demo/image/fetch/e_blur:300,g_face/${src}`;
  return (
    <div className="relative w-64 h-64">
      <div className="absolute inset-0">
        <Image
          src={cloudinaryUrl}
          alt="Just"
          layout="fill"
          objectFit="cover"
          className="rounded-3xl"
        />
      </div>
      <Image
        src={src}
        alt="Just"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 mix-blend-normal"
      />
    </div>
  );
};
export default BlurredImage;
