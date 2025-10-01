"use client"
import Nav from '@/app/component/nav'
import Form from '@/app/component/form'
import Footer from '@/app/component/footer'
import Main from './component/main'
import { useState } from 'react'



export default function Home() {

  const [provincia , setProvincia] = useState<string>("Argentina");
  const [election , setElection] =useState<string>('Generales');




  return (
    <>
    <Nav></Nav>
    <div className='m-10'>
    <Form setElection={setElection} setProvincia={setProvincia}></Form>
    </div>
    <Main election={election} provincia={provincia}></Main>

   <Footer></Footer>
   </>
  );
}
