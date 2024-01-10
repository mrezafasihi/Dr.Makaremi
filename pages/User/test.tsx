import apiRequests from '@/Axios/config'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect } from 'react'

function test() {

    // const data=useQuery({queryKey:["test"],queryFn:()=>axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{return res})})
    // console.log(data.data)

    useEffect(()=>{apiRequests.get(("/api/document")).then((res)=>console.log(res))},[])
  return (

    <div>
        
    </div>
  )
}

export default test