import { Children } from "react/cjs/react.production.min";

export default function PostTitle({children}) {
  return (
    <h1 className="text-black text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 mt-8  text-right ">
      {children}
    </h1>
  )
}
