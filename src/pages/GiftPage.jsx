import {Gift} from "../components/index";
import {Comment} from "../components/index";

export default function SpinWheelPage() {
  return (
    <>
      <div className="flex flex-col items-center p-6 relative">
      <Gift />
      <Comment />
      </div>
    </>
  )
}
