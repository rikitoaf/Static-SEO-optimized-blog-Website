import BlogDetails from "@/src/components/Blog/BlogDetails"
import RenderMdx from "@/src/components/Blog/RenderMdx"
import Tag from "@/src/components/Elements/Tag"
import { allBlogs } from "contentlayer/generated"
import Image from "next/image"

export default function BlogPage({ params }) {

    const blog = allBlogs.find((blog)=> blog._raw.flattenedPath === params.slug)    
    return <article>

        <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">

            <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Tag name = {blog.tags[0]} link={`/categories/${blog.tags[0]}`} className="px-6 text-sm py-2"/>
                <h1 className="inline-block mt-6 font-semibold capitalize text-light text-5xl leading-normal relative w-5/6">
                    {blog.title}
                </h1>
            </div>


            <div className="absolute top-0 left-0 right-0 h-full bg-dark/60" />
            <Image
        src={blog.image.filePath.replace("../public", "")}
        placeholder="blur"
        blurDataURL={blog.image.blurhashDataUrl}
        alt={blog.title}
        width={blog.image.width}
        height={blog.image.height}
        className="w-full h-full object-center object-cover rounded-xl group-hover:scale-105 transition-all ease duration-300"
        sizes="(max-width: 1180px) 100vw, 50vw"
      />
            <div/>
        </div>

        <BlogDetails blog ={blog} slug = {params.slug}/>

        <div className="grid grid-cols-12 gap-16 mt-8 px-8">
            <div className="col-span-4">Toc</div>
           <RenderMdx blog={blog}/>
        </div>

    </article>
  }