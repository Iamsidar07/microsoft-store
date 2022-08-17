import React from 'react'
import { useRouter } from "next/router";

const Info = () => {
    const router = useRouter();
    const { slug } = router.query;
  return (
    <div className="text-white  text-center">
      <h1 className="text-lg">{slug}</h1>
      <p className='text-xs'>This is not complete. Still working..</p>
    </div>
  )
}

export default Info
