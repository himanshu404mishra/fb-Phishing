
export default function Banner({img, isMeta, className=""}) {
  return (
        
            <img src={img} alt="banner image" className={`h-[150px] ${
            isMeta ? "scale-[180%] z-[-1]":""
        }
        object-cover`} />
     
  )
}
