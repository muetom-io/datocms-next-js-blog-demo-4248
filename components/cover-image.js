import { Image } from "react-datocms";
export default function CoverImage({ title, responsiveImage }) {
  const image = (
    <Image
      data={{
        ...responsiveImage,
        alt: `Cover Image for ${title}`,
      }}
      className="shadow-small"
    />
  );
  return <div className="sm:mx-0">{image}</div>;
}