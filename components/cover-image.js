import { Image } from "react-datocms";
import cn from "classnames";
import Link from "next/link";

export default function CoverImage({ title, responsiveImage, slug }) {
  const html = `
<div className="shadow-small" style=" overflow: hidden; display: flex;
flex-direction: column;
justify-content: center;
align-content: center;">
  <svg height="1000" width="2000" style="width: 100%; height: auto; display: block;">
    </svg>
    <div style="background-image: url(&quot;data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLCgoLDhgVDhgVDhUWEhEQHhkZHCIVFhUaKyslGh0tKRUWJDUlLS0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHDsoIig7Lzs7Ozs7Oy87OzsvOzs7Ly87Ozs7Ozs7Ozs7OzsvOzs7Ozs7NTs1NTs7Ly8vLy87O//AABEIAAwAGAMBIgACEQEDEQH/xAAYAAACAwAAAAAAAAAAAAAAAAAGBwABBf/EACEQAAIBAwMFAAAAAAAAAAAAAAECAAMEBREhQQYSFCMx/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwQC/8QAGREAAgMBAAAAAAAAAAAAAAAAAAECAyES/9oADAMBAAIRAxEAPwAVxGdPkKp21MaGCyXdSU6xP2FCmtypA5jO6fHqWS1TbwKNcktYUV8oUX7LmdcICu8kbTfJ/9k=&quot;); background-color: rgb(108, 135, 51); background-size: cover; opacity: 0; transition: opacity 500ms ease 500ms; position: absolute; left: 0px; top: 0px; bottom: 0px; right: 0px;">
      </div>
      <picture style="position: absolute; left: 0px; top: 0px; bottom: 0px; right: 0px; opacity: 1; transition: opacity 500ms ease 0s;">
        <source srcset="https://www.datocms-assets.com/27208/1588597517-olivenzweige.jpg?dpr=0.25&amp;fit=crop&amp;fm=webp&amp;h=1000&amp;w=2000 500w,https://www.datocms-assets.com/27208/1588597517-olivenzweige.jpg?dpr=0.5&amp;fit=crop&amp;fm=webp&amp;h=1000&amp;w=2000 1000w,https://www.datocms-assets.com/27208/1588597517-olivenzweige.jpg?dpr=0.75&amp;fit=crop&amp;fm=webp&amp;h=1000&amp;w=2000 1500w,https://www.datocms-assets.com/27208/1588597517-olivenzweige.jpg?fit=crop&amp;fm=webp&amp;h=1000&amp;w=2000 2000w,https://www.datocms-assets.com/27208/1588597517-olivenzweige.jpg?dpr=1.5&amp;fit=crop&amp;fm=webp&amp;h=1000&amp;w=2000 3000w,https://www.datocms-assets.com/27208/1588597517-olivenzweige.jpg?dpr=2&amp;fit=crop&amp;fm=webp&amp;h=1000&amp;w=2000 4000w,https://www.datocms-assets.com/27208/1588597517-olivenzweige.jpg?dpr=3&amp;fit=crop&amp;fm=webp&amp;h=1000&amp;w=2000 6000w"
         sizes="(max-width: 2000px) 100vw, 2000px" type="image/webp"/><source srcset="https://www.datocms-assets.com/27208/1588597517-olivenzweige.jpg?dpr=0.25&amp;fit=crop&amp;fm=jpg&amp;h=1000&amp;w=2000 500w,https://www.datocms-assets.com/27208/1588597517-olivenzweige.jpg?dpr=0.5&amp;fit=crop&amp;fm=jpg&amp;h=1000&amp;w=2000 1000w,https://www.datocms-assets.com/27208/1588597517-olivenzweige.jpg?dpr=0.75&amp;fit=crop&amp;fm=jpg&amp;h=1000&amp;w=2000 1500w,https://www.datocms-assets.com/27208/1588597517-olivenzweige.jpg?fit=crop&amp;fm=jpg&amp;h=1000&amp;w=2000 2000w,https://www.datocms-assets.com/27208/1588597517-olivenzweige.jpg?dpr=1.5&amp;fit=crop&amp;fm=jpg&amp;h=1000&amp;w=2000 3000w,https://www.datocms-assets.com/27208/1588597517-olivenzweige.jpg?dpr=2&amp;fit=crop&amp;fm=jpg&amp;h=1000&amp;w=2000 4000w,https://www.datocms-assets.com/27208/1588597517-olivenzweige.jpg?dpr=3&amp;fit=crop&amp;fm=jpg&amp;h=1000&amp;w=2000 6000w"
          sizes="(max-width: 2000px) 100vw, 2000px"/>
            <img src="https://www.datocms-assets.com/27208/1588597517-olivenzweige.jpg?fit=crop&amp;fm=jpg&amp;h=1000&amp;w=2000"
          alt="Cover Image for Unser Olivenöl" title="Olivenzweige" style="width: 100%;"/>
            </picture>
            <noscript></noscript>
            </div>

`;
  {
    /* <div dangerouslySetInnerHTML={{__html: html}}/>
     */
  }
  return (
    <picture>
       <source srcSet={responsiveImage.webpSrcSet} sizes={responsiveImage.sizes} type="image/webp"/>
        <source srcSet={responsiveImage.srcSet} sizes={responsiveImage.sizes} type="image/jpeg"/>
      <img
        src={responsiveImage.src}
        alt={title}
        className="shadow-small w-full"
      />
    </picture>
    /*   <Image
      data={{
        ...responsiveImage,
        alt: `${title}`,
      }}
      lazyLoad={false}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200 w-full -mx-2 sm:mx-0': slug,
      })}
    />  */
  );
}
