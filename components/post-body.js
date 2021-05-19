import markdownStyles from "./markdown-styles.module.css";
import rehypeReact from "rehype-react";
import unified from 'unified'
import  markdownTransform from 'remark-parse'
import remarkRehype from 'remark-rehype'
import React from "react"

export default function PostBody({ content }) {
  const Image = (props) => {
  return <img className="mt-2" src={`${props.src}?w=700&auto=format&q=50`} loading="lazy" alt={props.alt}></img>
  }
  const processor =  unified()
  .use(markdownTransform)
  .use(remarkRehype)
  .use(rehypeReact, {createElement: React.createElement ,
    components: { img: Image }})
  return (
    <div className="max-w-2xl  mx-4 sm:mx-auto"> 

      <div
        className={markdownStyles['markdown']}
        >{processor.processSync(content).result}</div>


</div>
  );
}
