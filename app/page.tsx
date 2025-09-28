"use client"
import Nav from '@/app/component/nav'
import Form from '@/app/component/form'
import Footer from '@/app/component/footer'
import Main from './component/main'
import { useState } from 'react'



export default function Home() {

  const [provincia , setProvincia] = useState<string>("Argentina");
  console.log(provincia);



  return (
    <>
    <Nav></Nav>
    <div className='m-10'>
    <Form setProvincia={setProvincia}></Form>
    </div>
    <Main provincia={provincia}></Main>

   <Footer></Footer>
   </>
  );
}
