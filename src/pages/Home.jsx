import { Navbar,Card, Marquee } from '../components/index'
import underlineSvg from "../assets/underline.svg"
export default function Home() {
  return (
      <>
        <Navbar/>
        <div className='m-auto w-[500px] mt-5'>
          <Card/> 
        </div>
  <br /><br />
        <div className='cooperation-div z-20'>
        <h2 className='cooperation-text capitalize text-center text-5xl  font-bold text-blue-400'>In cooperation with</h2>
        <div className="underline">
          <img src={underlineSvg} alt="" />
        </div>
        </div>
        <br /><br />
        <Marquee/>
      </>
    )
}
