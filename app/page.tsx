import Nav from '@/app/component/nav'
import Form from '@/app/component/form'
import Footer from '@/app/component/footer'
import Main from './component/main'

export default function Home() {
  return (
    <>
    <Nav></Nav>
    <div className='m-20'>
    <Form></Form>
    <Main></Main>
    </div>
   <Footer></Footer>
   </>
  );
}
