export const HousesList = [
    {
        id: 1,
        title: "Lake House",
        slug: "lake_house",
        price: "$675,000",
        surface: "3,461 sqft",
        address: "Forest Hills",
        description: "Location, Space & Possibilities! This large home is ready for its next owner to finish the space as they see fit! The main level provides tons of living space and room to spread out! Inside the front door you are greeted by an entryway that flows into the living area.",
        image: "image1.webp"
    },
    {
        id: 2,
        title: "Joyful House",
        slug: "joyful_house",
        price: "$245,000",
        surface: "2792 sqft",
        address: "Fennville, MI",
        description: "Welcome Home! Custom built gorgeous home in Forest Hills Schools! Convenient to everything. With 5 bedrooms and 3 full bathrooms, you just need to bring your tooth brush! Inside you walk into the living space, complete with vaulted ceilings and a beautiful fireplace.",
        image: "image2.webp"
    },
    {
        id: 3,
        title: "Modern Apartment",
        slug: "modern_apartment",
        price: " $375,000",
        surface: "3,461 sqft",
        address: "Forest Hills",
        description: "Location, Space & Possibilities! This large home is ready for its next owner to finish the space as they see fit! The main level provides tons of living space and room to spread out! Inside the front door you are greeted by an entryway that flows into the living area. ",
        image: "image3.webp"
    },
    {
        id: 4,
        title: "The Classic",
        slug: "the_classic",
        price: "$585,000",
        surface: "3,461 sqft",
        address: "Forest Hills",
        description: "Location, Space & Possibilities! This large home is ready for its next owner to finish the space as they see fit! The main level provides tons of living space and room to spread out! Inside the front door you are greeted by an entryway that flows into the living area. ",
        image: "image4.webp"
    },
    {
        id: 5,
        title: "The Crib",
        slug: "the_crib",
        price: "$885,000",
        surface: "3,461 sqft",
        address: "Forest Hills",
        description: "Location, Space & Possibilities! This large home is ready for its next owner to finish the space as they see fit! The main level provides tons of living space and room to spread out! Inside the front door you are greeted by an entryway that flows into the living area. ",
        image: "image5.webp"
    },
    {
        id: 6,
        title: "Peaceful House",
        slug: "peaceful_house",
        price: "$445,000",
        surface: "3,461 sqft",
        address: "Forest Hills",
        description: "Location, Space & Possibilities! This large home is ready for its next owner to finish the space as they see fit! The main level provides tons of living space and room to spread out! Inside the front door you are greeted by an entryway that flows into the living area. ",
        image: "image6.webp"
    },
]

export interface HouseItem {
    id: number,
    title: string,
    slug: string,
    price: string,
    surface: string,
    address: string,
    description: string,
    image: string
}