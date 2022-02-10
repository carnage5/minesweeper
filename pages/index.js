import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Board from '../components/board'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router=useRouter();
  const [pName,setpName]=useState('')
  const login=(e)=>{
    e.preventDefault()
    console.log(pName)
    router.push('/joingame')
  }
  return (
    <div>
      {/* <Board /> */}
      <form onSubmit={login}>
      {/* <h5>enter name</h5> */}
      {/* <input type="text" onChange={e=>setpName(e.target.value)}/> */}
      <button type="submit">Enter</button>
      </form>
    </div>
  )
}
//git test
