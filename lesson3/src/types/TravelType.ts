interface TravelType {
    id: number
    img: {
      src: string
      alt: string
    }
    country: string
    googleMapsLink: string
    title: string
    dates: string
    text: string
    createdAt: Date
}

export type { TravelType }