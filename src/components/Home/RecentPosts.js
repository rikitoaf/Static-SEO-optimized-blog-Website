import React from 'react'
import { sortBlogs } from "@/src/utils";
import Link from "next/link";
import BlogLayoutThree from "../Blog/BlogLayoutThree";

function RecentPosts({ blogs }) {
    const sortedBlogs = sortBlogs(blogs);
  return (
    <section className='w-full  mt-16  px-5  flex flex-col items-center justify-center'>

        <div className="w-full flex  justify-between">
            <h2 className="w-fit inline-block font-bold capitalize text-2xl  text-dark">
            Recent Posts
            </h2>
            <Link
            href="/categories/all"
            className="inline-block font-medium text-accent  underline underline-offset-2      text-base "
            >
            view all
            </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
        {sortedBlogs.slice(4, 10).map((blog, index) => {
          return (
            <article key={index} className="col-span-1 row-span-1 relative">
              <BlogLayoutThree blog={blog} />
            </article>
          );
        })}
        </div>

    </section>
  )
}

export default RecentPosts