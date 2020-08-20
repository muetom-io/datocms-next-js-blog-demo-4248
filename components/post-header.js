import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <div className="relative text-center w-full">
      <CoverImage title={title} responsiveImage={coverImage.responsiveImage} />
      <h1 className="absolute left-0 bottom-0 w-40  text-white text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-4 ml-4 sm:ml-8 sm:mb-8 text-left">
        {title}
      </h1>
    </div>
  );
}
