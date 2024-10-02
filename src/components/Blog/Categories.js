import React from 'react'
import Category from './Category'
import { slug } from 'github-slugger'

const Categories = ({categories, cuurentSlug}) => {
  return (
    <div className='px-20 mt-10 botder-t-2 text-dark border-b-2 border-solid border-dark py-4 flex items-start flex-wrap font-medium mx-10'>
    {
        categories.map(cat => <Category key = {cat} link={`/categories/${cat}`} name = {cat}
            active = {cuurentSlug ===slug(cat)} />)
            
    }
    </div>
  )
}

export default Categories