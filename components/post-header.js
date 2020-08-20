import CoverImage from "../components/cover-image";

export default function PostHeader({ title, coverImage }) {
  return (
    <div className="relative text-center w-full mb-12">
      <CoverImage title={title} responsiveImage={coverImage.responsiveImage} />
      <h1 className="absolute left-0 bottom-0 w-40  text-white text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-4 ml-4 sm:ml-8 sm:mb-8 text-left">
        {title}
      </h1>
    </div>
  );
}
