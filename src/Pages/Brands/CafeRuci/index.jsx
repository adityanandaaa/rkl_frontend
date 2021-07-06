import BrandCover from './Media/brand-cover.jpg'
import Title from './Media/brands-1.png'
import Food from './Media/food.jpg'
import Drink from './Media/drink.jpeg'
import EventCover from './Media/event-cover.jpg'
import LocationCover from './Media/location-cover.png'
import Promo1 from './Media/promo-1.png'
import Promo2 from './Media/promo-2.png'
import RuciBanner from './Media/ruci-banner.png'

export const Ruci = {
    id: 1,
    url: 'cafe-ruci',
    headerBackground: BrandCover,
    title: Title,
    description: 'Cafe Ruci is located in Jalan Suryo No. 49, South Jakarta, Cafe Ruci is a newly opened restaurant in the area that serves Southern European food, speciality coffee and delicious cocktails.',
    menu: [Food, Drink],
    event: {
        eventBackground: EventCover,
        eventPic: [Promo1, Promo2]
    },
    gallery: [RuciBanner, BrandCover],
    locationBackground: LocationCover,
    insta: '@caferuci'
}
