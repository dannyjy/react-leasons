import type { TravelType } from "../types/TravelType"
import locationPng from "../assets/location.png"

const TravelCard = ({ img, country, googleMapsLink, title, dates, text }: TravelType) => {
  return (
    <div className="flex justify-center items-center gap-6 p-3">
        <img src={img.src} alt={img.alt} className="w-37.5 h-50 rounded-2xl object-center object-cover"/>
        <section className="space-y-2">
          <div className='flex items-center gap-1'>
            <img src={locationPng} alt="" className="w-3 h-3"/>
            <p>{country}</p>
            <a href={googleMapsLink} className="underline">View on Google Maps</a>
          </div>
          <h1 className="font-bold text-2xl">{title}</h1>
          <p>{dates}</p>
          <p className="max-w-120">{text}</p>
        </section>
    </div>
  )
}

export default TravelCard