import {Navbar,Gift,Comment} from "../components/index";

export default function SpinWheelPage() {
  return (
    <>
    <Navbar/>
      <div className="flex flex-col items-center p-6 relative">
      <Gift />
      <Comment />
      </div>
    </>
  )
}
