import Link from 'next/link'
import React from 'react'
import {cx} from "@/src/utils"


function Category({link='#', name, active, ...props})

{
  
  return (
    <Link href={(link)} className={cx("inline-block py-2 sm:py-3 px-6 sm:px-10   rounded-full capitalize  border-2 border-solid border-dark m-2 hover:scale-105 transition-all ease duration-200 text-sm sm:text-base",props.className, active ? 'bg-dark text-light': 'bg-light text-dark')}>
    {name}
    </Link>
  )
}

export default Category