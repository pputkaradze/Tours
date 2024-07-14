import { useState,useEffect } from 'react';
import zermatt from './countryPhotos/1.webp'
import geneva from './countryPhotos/lake geneva.jpeg'
import zurich from './countryPhotos/zurich.jpg'
import rio from './countryPhotos/Rio-de-Janeiro-Braz.webp'
import hulhumale from './countryPhotos/hulhumale.jpg'
import phuket from './countryPhotos/phuket.jpg'
import rome from './countryPhotos/rome-italy.jpg'
import barca from './countryPhotos/barca.jpg'
import lakeComo from './countryPhotos/lake como.jpg'
import chiangMai from './countryPhotos/chiang mai.jpg'
import toronto from './countryPhotos/147900-Toronto.jpg'
import venice from './countryPhotos/venice.webp'
import copacabana from './countryPhotos/copacabana.jpg'
import vancouver from './countryPhotos/vancouver.jpg'
import amalfi from './countryPhotos/amalfi-coast.jpg'
import nabfNational from './countryPhotos/banf national part.webp'
import krabi from './countryPhotos/Krabi.jpeg'
import melburnian from './countryPhotos/Melburnian_Skyline.jpg'
import lucerne from './countryPhotos/lucerne.jpg'
import tokyo from './countryPhotos/tokyo.jpg'
import bondi from './countryPhotos/Bondi_from_above.jpg'
import AriaToll from './countryPhotos/ari atoll.jpg'
import maafushi from './countryPhotos/maafushi-village.jpg'
import okinawa from './countryPhotos/okinawa.jpg'
import grandCanyoyn from './countryPhotos/grand canyon.jpg'
import amazonRiver from './countryPhotos/amazon-river-basin.jpg'
import iguzuFalls from './countryPhotos/iguzu falls.jpg'
import lakeKawaguchi from './countryPhotos/kawaguchi.jpg'
import hakuba from './countryPhotos/hakuba.jpg'
import ibiza from './countryPhotos/ibiza.jpg'
import lakeTahoe from './countryPhotos/lake tahoe.jpg'
import neywork from './countryPhotos/newyork.jpg'
import greatBarrier from './countryPhotos/great-barrier.jpg'
import sydney from './countryPhotos/Sydney City Day Tour.jpg'
import sharmel from './countryPhotos/sharm-el-sheikh_1366813c.jpg'
import nile from './countryPhotos/nilw.jpg'
import male from './countryPhotos/Male-total.jpg'
import whistler from './countryPhotos/whistler-village-bc.jpg'
import cairo from './countryPhotos/cairo.jpg'
import giza from './countryPhotos/giza.jpg'
import mallorca from './countryPhotos/mallorca.webp'
import miami from './countryPhotos/miami beach.jpg'
import bangkok from './countryPhotos/bangkok.jpg'
import seville from './countryPhotos/seville1.jpg'

const touristTours = [
    {
        country: "Switzerland",
        region: "Europe",
        places: [
            {
                id: 1,
                title: "Zermatt Ski Adventure",
                name: "Zermatt",
                category: "Ski-in",
                price: 150,
                image: zermatt,
                description: `Experience the ultimate ski adventure, home to the Matterhorn.`,
                duration: "5 days",
                startDate: "2024-07-12",
                endDate: "2024-07-17"
            },
            {
                id: 2,
                title: "Lake Geneva Tour",
                name: "Lake Geneva",
                category: "Lake",
                price: 120,
                image: geneva,
                description: "Enjoy a relaxing tour ,surrounded by breathtaking scenery.",
                duration: "3 days",
                startDate: "2024-07-15",
                endDate: "2024-07-18"
            },
            {
                id: 3,
                title: "Zurich City Exploration",
                name: "Zurich",
                category: "Top Cities",
                price: 200,
                image: zurich,
                description: "Explore the vibrant city of Zurich, known for its rich culture and historical landmarks.",
                duration: "4 days",
                startDate: "2024-07-20",
                endDate: "2024-07-24"
            },
            {
                id: 4,
                title: "Lucerne Lake Cruise",
                name: "Lucerne",
                category: "Lake",
                price: 130,
                image: lucerne,
                description: "Enjoy a scenic cruise on Lake Lucerne, surrounded by mountains and picturesque towns.",
                duration: "2 days",
                startDate: "2024-07-22",
                endDate: "2024-07-24"
            }
        ]
    },
    {
        country: "Egypt",
        region: "Africa",
        places: [
            {
                id: 5,
                title: "Cairo Historical Tour",
                name: "Cairo",
                category: "Top Cities",
                price: 100,
                image: cairo,
                description: "Discover the ancient wonders of Cairo, including the Pyramids and the Sphinx.",
                duration: "5 days",
                startDate: "2024-08-22",
                endDate: "2024-08-27"
            },
            {
                id: 6,
                title: "Giza Desert Expedition",
                name: "Giza",
                category: "Desert",
                price: 80,
                image: giza,
                description: "Embark on an expedition to the vast desert of Giza, home to the Great Pyramids.",
                duration: "3 days",
                startDate: "2024-08-05",
                endDate: "2024-08-08"
            },
            {
                id: 7,
                title: "Nile River Cruise",
                name: "Nile River",
                category: "Boats",
                price: 150,
                image: nile,
                description: "Sail along the Nile River and explore the ancient temples and cities along its banks.",
                duration: "7 days",
                startDate: "2024-08-07",
                endDate: "2024-08-14"
            },
            {
                id: 8,
                title: "Sharm El Sheikh Beach Resort",
                name: "Sharm El Sheikh",
                category: "Beach",
                price: 200,
                image: sharmel,
                description: "Relax at the luxury beach resorts of Sharm El Sheikh, known for its clear waters and coral reefs.",
                duration: "5 days",
                startDate: "2024-08-01",
                endDate: "2024-08-06"
            }
        ]
    },
    {
        country: "Australia",
        region: "Oceania",
        places: [
            {
                id: 9,
                title: "Sydney City Tour",
                name: "Sydney",
                category: "Top Cities",
                price: 180,
                image: sydney,
                description: "Experience the vibrant culture and iconic landmarks of Sydney, Australia.",
                duration: "4 days",
                startDate: "2024-08-02",
                endDate: "2024-08-06"
            },
            {
                id: 10,
                title: "Bondi Beach Relaxation",
                name: "Bondi Beach",
                category: "Beach",
                price: 100,
                image: bondi,
                description: "Relax on the famous Bondi Beach, known for its golden sands and excellent surf.",
                duration: "2 days",
                startDate: "2024-08-05",
                endDate: "2024-08-07"
            },
            {
                id: 11,
                title: "Great Barrier Reef Exploration",
                name: "Great Barrier Reef",
                category: "Tropical",
                price: 300,
                image: greatBarrier,
                description: "Dive into the world's largest coral reef system and discover its diverse marine life.",
                duration: "6 days",
                startDate: "2024-08-10",
                endDate: "2024-08-16"
            },
            {
                id: 12,
                title: "Melbourne Cultural Journey",
                name: "Melbourne",
                category: "Top Cities",
                price: 150,
                image: melburnian,
                description: "Discover the cultural heart of Australia with its vibrant arts scene and diverse cuisine.",
                duration: "4 days",
                startDate: "2024-08-12",
                endDate: "2024-08-16"
            }
        ]
    },
    {
        country: "USA",
        region: "North America",
        places: [
            {
                id: 13,
                title: "New York City Adventure",
                name: "New York City",
                category: "Top Cities",
                price: 250,
                image: neywork,
                description: "Explore the bustling city of New York, known for its iconic landmarks and vibrant culture.",
                duration: "5 days",
                startDate: "2024-08-15",
                endDate: "2024-08-20"
            },
            {
                id: 14,
                title: "Lake Tahoe Retreat",
                name: "Lake Tahoe",
                category: "Lake",
                price: 130,
                image: lakeTahoe,
                description: "Relax at the beautiful Lake Tahoe, known for its crystal-clear waters and scenic views.",
                duration: "3 days",
                startDate: "2024-08-18",
                endDate: "2024-08-21"
            },
            {
                id: 15,
                title: "Miami Beach Getaway",
                name: "Miami Beach",
                category: "Beach",
                price: 150,
                image: miami,
                description: "Enjoy the sun and sand , famous for its vibrant nightlife and stunning beaches.",
                duration: "4 days",
                 startDate: "2024-08-20",
                endDate: "2024-08-24"
            },
            {
                id: 16,
                title: "Grand Canyon Adventure",
                name: "Grand Canyon",
                category: "Desert",
                price: 200,
                image: grandCanyoyn,
                description: "Experience the awe-inspiring beauty of the Grand Canyon on this thrilling adventure.",
                duration: "3 days",
                startDate: "2024-08-22",
                endDate: "2024-08-25"
            }
        ]
    },
    {
        country: "Japan",
        region: "Asia",
        places: [
            {
                id: 17,
                title: "Tokyo City Highlights",
                name: "Tokyo",
                category: "Top Cities",
                price: 220,
                image: tokyo,
                description: "Discover the unique blend of tradition and modernity in Japan's bustling capital city, Tokyo.",
                duration: "5 days",
                startDate: "2024-08-25",
                endDate: "2024-08-30"
            },
            {
                id: 18,
                title: "Hakuba Valley Skiing",
                name: "Hakuba Valley",
                category: "Ski-in",
                price: 140,
                image: hakuba,
                description: "Enjoy world-class skiing and snowboarding in the scenic Hakuba Valley.",
                duration: "4 days",
                startDate: "2024-08-27",
                endDate: "2024-08-31"
            },
            {
                id: 19,
                title: "Lake Kawaguchi Scenic Tour",
                name: "Lake Kawaguchi",
                category: "Lake",
                price: 90,
                image: lakeKawaguchi,
                description: "Take in the stunning views of Mount Fuji from the shores of Lake Kawaguchi.",
                duration: "2 days",
                startDate: "2024-08-28",
                endDate: "2024-08-30"
            },
            {
                id: 20,
                title: "Okinawa Beach Vacation",
                name: "Okinawa",
                category: "Beach",
                price: 180,
                image: okinawa,
                description: "Relax on the beautiful beaches of Okinawa, known for its clear blue waters and rich history.",
                duration: "4 days",
                startDate: "2024-09-01",
                endDate: "2024-09-05"
            }
        ]
    },
    {
        country: "Brazil",
        region: "South America",
        places: [
            {
                id: 21,
                title: "Rio de Janeiro Experience",
                name: "Rio de Janeiro",
                category: "Top Cities",
                price: 160,
                image: rio,
                description: "Explore the vibrant city of Rio, known for its carnival and beaches.",
                duration: "4 days",
                startDate: "2024-09-12",
                endDate: "2024-09-15"
            },
            {
                id: 22,
                title: "Amazon Rainforest Adventure",
                name: "Amazon Rainforest",
                category: "Tropical",
                price: 250,
                image: amazonRiver,
                description: "Discover the incredible biodiversity of the Amazon Rainforest on this thrilling adventure.",
                duration: "7 days",
                startDate: "2024-09-16",
                endDate: "2024-09-23"
            },
            {
                id: 23,
                title: "Copacabana Beach Vibes",
                name: "Copacabana Beach",
                category: "Beach",
                price: 120,
                image: copacabana,
                description: "Relax and enjoy the lively atmosphere at the famous Copacabana Beach.",
                duration: "3 days",
                startDate: "2024-09-24",
                endDate: "2024-09-26"
            },
            {
                id: 24,
                title: "Iguaçu Falls Exploration",
                name: "Iguaçu Falls",
                category: "Tropical",
                price: 180,
                image: iguzuFalls,
                description: "Explore the stunning Iguaçu Falls, one of the largest and most impressive waterfalls in the world.",
                duration: "2 days",
                startDate: "2024-09-27",
                endDate: "2024-09-28"
            }
        ]
    },
    {
        country: "Canada",
        region: "North America",
        places: [
            {
                id: 25,
                title: "Whistler Ski Resort",
                name: "Whistler",
                category: "Ski-in",
                price: 180,
                image: whistler,
                description: "Experience the top-notch skiing and snowboarding at Whistler, one of North America's best ski resorts.",
                duration: "5 days",
                 startDate: "2024-09-29",
                endDate: "2024-10-03"
            },
            {
                id: 26,
                title: "Banff National Park Tour",
                name: "Banff National Park",
                category: "Lake",
                price: 110,
                image: nabfNational,
                description: "Explore the stunning landscapes and wildlife of Banff National Park.",
                duration: "4 days",
                 startDate: "2024-10-04",
                endDate: "2024-10-07"
            },
            {
                id: 27,
                title: "Toronto City Lights",
                name: "Toronto",
                category: "Top Cities",
                price: 200,
                image:toronto,
                description: "Discover the vibrant culture and iconic landmarks of Toronto.",
                duration: "3 days",
                 startDate: "2024-10-08",
                endDate: "2024-10-10"
            },
            {
                id: 28,
                title: "Vancouver Coastal Adventure",
                name: "Vancouver",
                category: "Top Cities",
                price: 150,
                image: vancouver,
                description: "Experience the beautiful coastal city of Vancouver with its diverse culture and scenic views.",
                duration: "4 days",
                 startDate: "2024-10-11",
                endDate: "2024-10-14"
            }
        ]
    },
    {
        country: "Maldives",
        region: "Asia",
        places: [
            {
                id: 29,
                title: "Male City Tour",
                name: "Male",
                category: "Top Cities",
                price: 300,
                image: male,
                description: "Explore the capital city of the Maldives, known for its vibrant markets and historic sites.",
                duration: "2 days",
                startDate: "2024-10-15",
                endDate: "2024-10-16"
            },
            {
                id: 30,
                title: "Maafushi Island Retreat",
                name: "Maafushi",
                category: "Beach",
                price: 250,
                image: maafushi,
                description: "Relax on the pristine beaches of Maafushi Island, a popular destination in the Maldives.",
                duration: "3 days",
                startDate: "2024-10-17",
                endDate: "2024-10-19"
            },
            {
                id: 31,
                title: "Ari Atoll Diving",
                name: "Ari Atoll",
                category: "Tropical",
                price: 350,
                image: AriaToll,
                description: "Dive into the clear waters of Ari Atoll and explore its vibrant coral reefs and marine life.",
                duration: "5 days",
                startDate: "2024-10-20",
                endDate: "2024-10-24"
            },
            {
                id: 32,
                title: "Hulhumale Island Getaway",
                name: "Hulhumale",
                category: "Beach",
                price: 200,
                image: hulhumale,
                description: "Enjoy the serene beaches and modern amenities of Hulhumale Island.",
                duration: "3 days",
                startDate: "2024-10-25",
                endDate: "2024-10-27"
            }
        ]
    },
    {
        country: "Italy",
        region: "Europe",
        places: [
            {
                id: 33,
                title: "Venice Canal Tour",
                name: "Venice",
                category: "Boats",
                price: 220,
                image: venice,
                description: "Experience the enchanting canals of Venice on a romantic gondola ride.",
                duration: "3 days",
                startDate: "2024-10-28",
                endDate: "2024-10-30"
            },
            {
                id: 34,
                title: "Rome Historical Walk",
                name: "Rome",
                category: "Top Cities",
                price: 180,
                image: rome,
                description: "Explore the ancient ruins and historical landmarks of Rome.",
                duration: "4 days",
                startDate: "2024-10-31",
                endDate: "2024-11-03"
            },
            {
                id: 35,
                title: "Amalfi Coast Escape",
                name: "Amalfi Coast",
                category: "Beach",
                price: 200,
                image: amalfi,
                description: "Relax on the beautiful beaches and enjoy the stunning views of the Amalfi Coast.",
                duration: "5 days",
                 startDate: "2024-11-04",
                endDate: "2024-11-08"
            },
            {
                id: 36,
                title: "Lake Como Retreat",
                name: "Lake Como",
                category: "Lake",
                price: 150,
                image: lakeComo,
                description: "Experience the tranquility and scenic beauty of Lake Como.",
                duration: "3 days",
                 startDate: "2024-11-09",
                endDate: "2024-11-11"
            }
        ]
    },
    {
        country: "Thailand",
        region: "Asia",
        places: [
            {
                id: 37,
                title: "Bangkok City Exploration",
                name: "Bangkok",
                category: "Top Cities",
                price: 140,
                image: bangkok,
                description: "Discover the vibrant culture and bustling streets of Bangkok.",
                duration: "4 days",
                startDate: "2024-11-12",
                endDate: "2024-11-15"
            },
            {
                id: 38,
                title: "Phuket Beach Holiday",
                name: "Phuket",
                category: "Beach",
                price: 180,
                image: phuket,
                description: "Relax on the stunning beaches of Phuket, known for its clear waters and lively nightlife.",
                duration: "5 days",
                startDate: "2024-11-16",
                endDate: "2024-11-20"
            },
            {
                id: 39,
                title: "Chiang Mai Jungle Trek",
                name: "Chiang Mai",
                category: "Tropical",
                price: 150,
                image: chiangMai,
                description: "Explore the lush jungles and experience the rich culture of Chiang Mai.",
                duration: "3 days",
                startDate: "2024-11-21",
                endDate: "2024-11-23"
            },
            {
                id: 40,
                title: "Krabi Island Hopping",
                name: "Krabi",
                category: "Boats",
                price: 200,
                image: krabi,
                description: "Hop between the beautiful islands of Krabi, known for their stunning limestone cliffs and clear waters.",
                duration: "4 days",
                 startDate: "2024-11-24",
                endDate: "2024-11-27"
            }
        ]
    },
    {
        country: "Spain",
        region: "Europe",
        places: [
            {
                id: 41,
                title: "Barcelona City Highlights",
                name: "Barcelona",
                category: "Top Cities",
                price: 170,
                image: barca,
                description: "Explore the vibrant city of Barcelona, known for its unique architecture and cultural landmarks.",
                duration: "3 days",
                startDate: "2024-11-28",
                endDate: "2024-11-30"
            },
            {
                id: 42,
                title: "Ibiza Beach Party",
                name: "Ibiza",
                category: "Beach",
                price: 220,
                image: ibiza,
                description: "Enjoy the lively nightlife and stunning beaches of Ibiza.",
                duration: "4 days",
                startDate: "2024-12-05",
                endDate: "2024-12-07"
            },
            {
                id: 43,
                title: "Seville Historical Tour",
                name: "Seville",
                category: "Top Cities",
                price: 150,
                image: seville,
                description: "Discover the rich history and beautiful architecture of Seville.",
                duration: "3 days",
                startDate: "2024-12-05",
                endDate: "2024-12-07"
            },
            {
                id: 44,
                title: "Mallorca Island Retreat",
                name: "Mallorca",
                category: "Beach",
                price: 200,
                image: mallorca,
                description: "Relax on the beautiful beaches of Mallorca and explore its charming towns.",
                duration: "5 days",
                startDate: "2024-12-08",
                endDate: "2024-12-12"
            }
        ]
    }
];





  
export default touristTours;
  

