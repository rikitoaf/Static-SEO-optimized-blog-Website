"use client"

import React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'

const mdxComponent = {
    Image
}
function RenderMdx({blog}) {
    const MDXContent = useMDXComponent(blog.body.code)
  return (
    <div className='col-span-8 font-in prose porse-lg max-w-max prose-blockquote:bg-accent/20
    prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-accent prose-blockquote:rounded-r-lg'>
        <MDXContent components={mdxComponent}/>
    </div>
  )
}

export default RenderMdx