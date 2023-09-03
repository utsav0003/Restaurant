"use client";
import ('../Components/styles/HomeStyle.css')
import React from 'react'
import Front from '../Components/Front'
import Link from 'next/link'

const Page = () => {
  return (
    <>
        <div className='home'>
          <div className='headercontainer'>
            <h1>Tasty Food</h1>
            <h4>Delivers Food at your DoorStep</h4>
            <h5>Best service across INDIA</h5>
            <Link href={'../menu'}>
              <button>Order Now</button>
            </Link>

          </div>

        </div>
    </>
  )
}

export default Page