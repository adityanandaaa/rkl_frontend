import BrandCover from './Media/brand-cover.png'
import Title from './Media/brands-1.png'
import Food from './Media/food.png'
import Drink from './Media/drink.png'
import EventCover from './Media/event-cover.png'
import LocationCover from './Media/location-cover.png'
import Promo1 from './Media/promo-1.png'
import Promo2 from './Media/promo-2.png'
import NumberBanner from './Media/123-banner.png'

export const Numbers = {
    id: 2,
    url: 'number',
    headerBackground: BrandCover,
    title: Title,
    description: 'Cafe Ruci is located in Jalan Suryo No. 49, South Jakarta, Cafe Ruci is a newly opened restaurant in the area that serves Southern European food, speciality coffee and delicious cocktails.',
    menu: [Food, Drink],
    event: {
        eventBackground: EventCover,
        eventPic: [Promo1, Promo2]
    },
    gallery: [NumberBanner, BrandCover],
    locationBackground: LocationCover
}
