import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-districtlist',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './districtlist.component.html',
  styleUrl: './districtlist.component.scss'
})
export class DistrictlistComponent {

  districts: any[] = [
    {
      "id": 1,
      "name": "Thiruvananthapuram",
      "image1": "images/tvm1.jpg",
      "image2": "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/kanyakumari-sunrise-india-sandeep-kumar-dogra.jpg",
      "introduction": "Referred to by Mahatma Gandhi as the Evergreen city of India, the city is characterised by its undulating terrain of low coastal hills. The city is famous for its ancient temples, museums, and art galleries, as well as its beautiful beaches and backwaters. The city of Thiruvananthapuram has been the centre of cultural activities of Kerala (India) from the time it was made capital of Travancore in 1745. The capital city is a major intellectual and artistic center.",
      "top_attractions": [
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/84/41/f0/caption.jpg?w=600&h=600&s=1",
          "name": "Kanyakumari Beach",
          "description": "The southernmost tip of mainland India popular for its beautiful beaches, unique Vivekananda Rock Memorial, and stunning sunrise and sunset views."
        },
        {
          "imagesrc": "https://assets.telegraphindia.com/telegraph/2022/Jan/1641658803_varkala-beach.jpg",
          "name": "Varkala Beach",
          "description": "Famous for its crescent-shaped beach and pristine waters, Varkala is a popular destination for sunbathing, swimming, and beachside activities."
        },
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/5d/df/27/at-kovalam-beach.jpg?w=1000&h=800&s=1",
          "name": "Kovalam Beach",
          "description": "Famous for its crescent-shaped beach and pristine waters, Kovalam is a popular destination for sunbathing, swimming, and beachside activities."
        },
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/fe/2b/f3/sree-padmanabhaswamy.jpg?w=1000&h=800&s=1",
          "name": "Pathnabhama Swamy Temple",
          "description": "A historic temple known for its intricate architecture and the world's richest Hindu temple treasury."
        },
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/26/d2/9a/vizhinjam-lighthouse.jpg?w=1000&h=800&s=1",
          "name": "Vizhinjam Light House",
          "description": "Offering panoramic views of the Arabian Sea, it's a great spot for photography and sightseeing."
        },
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/c4/36/9c/zoo-museum.jpg?w=1000&h=800&s=1",
          "name": "Napier Museum",
          "description": "A 19th-century art and natural history museum with a unique architectural style."
        },
      ],
    },
    {
      "id": 2,
      "name": "Kollam",
      // "image1": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/bb/0a/87/thirumullavaram-beach.jpg?w=1000&h=-1&s=1",
      "image1": "https://keralatourpackagesguide.com/wp-content/uploads/2017/04/lighthouse.jpg",
      "image2": "https://static.wixstatic.com/media/9b64ce_9149d1731cbf4fa1b84ff2db52aab224~mv2.jpg/v1/fill/w_980,h_654,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9b64ce_9149d1731cbf4fa1b84ff2db52aab224~mv2.jpg",
      "introduction": "Kollam is a city in the state of Kerala, on India's Malabar Coast. It’s known as a trade hub and for its beaches, like lively Kollam and secluded Thirumullavaram. Sardar Vallabhbhai Patel Police Museum has artifacts tracing the history of the police force. Nearby, Ashtamudi Lake is a gateway to the Kerala backwaters, a network of waterways rich with vegetation.",
      "top_attractions": [
        {
          "imagesrc": "https://static.wixstatic.com/media/c8e24e_389399b79d7d4ff2a10f52d619e12840~mv2.jpeg/v1/fill/w_616,h_346,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Jatayu-Nature-Park-In-Kerala.jpeg",
          "name": "Jatayu Earth's Center",
          "description": "The southernmost tip of mainland India popular for its beautiful beaches, unique Vivekananda Rock Memorial, and stunning sunrise and sunset views."
        },
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/be/73/88/img-20170911-wa0033-largejpg.jpg?w=1000&h=-1&s=1",
          "name": "Thangassery Light House",
          "description": "Famous for its crescent-shaped beach and pristine waters, Kovalam is a popular destination for sunbathing, swimming, and beachside activities."
        },
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/ee/cc/bb/kollam-beach.jpg?w=1000&h=800&s=1",
          "name": "Kollam Beach",
          "description": "Famous for its crescent-shaped beach and pristine waters, Kovalam is a popular destination for sunbathing, swimming, and beachside activities."
        },
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/13/fe/28/view-of-the-lake-from.jpg?w=1000&h=800&s=1",
          "name": "Sasthamkotta Lake",
          "description": "Famous for its crescent-shaped beach and pristine waters, Kovalam is a popular destination for sunbathing, swimming, and beachside activities."
        },
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/2c/82/88/sri-mahaganapathi-temple.jpg?w=1000&h=-1&s=1",
          "name": "Sri Mahaganapathi Temple",
          "description": "Famous for its crescent-shaped beach and pristine waters, Kovalam is a popular destination for sunbathing, swimming, and beachside activities."
        },
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/bb/0a/87/thirumullavaram-beach.jpg?w=1000&h=-1&s=1",
          "name": "Thirumullavaram Beach",
          "description": "Famous for its crescent-shaped beach and pristine waters, Kovalam is a popular destination for sunbathing, swimming, and beachside activities."
        },
      ],
    },
    {
      "id": 3,
      "name": "Pathanamthitta",
      "image1": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/cc/bf/de/caption.jpg?w=1200&h=-1&s=1",
      "image2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqoxqelUBQih-Kjn2ZidaDeQwtvL_AfhPWxA&s",
      "introduction": "Pathanamthitta is known as the 'Pilgrim Capital of Kerala', famous for the Sabarimala temple. The district is rich in natural beauty with numerous rivers, forests, and religious places. Pathanamthitta district has places known for its historical importance. Among them are, ancient Valiyakoickal Temple and Palace at Pandalam, monument of Velu Thampi Dalawa at Mannadi and the Muloor Smarakom (Muloor memorial). Pandalam was the capital of the ancient Travancore kingdom.",
      "top_attractions": [
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/cc/bf/de/caption.jpg?w=1200&h=-1&s=1",
          "name": "Perunthenaruvi Waterfalls",
          "description": "A stunning waterfall located on the banks of the Pamba River, ideal for trekking and picnics."
        },
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/5a/b7/dc/front-view.jpg?w=1200&h=1200&s=1",
          "name": "Parumala Church",
          "description": "An important Christian pilgrimage site dedicated to Saint Gregorios."
        },
        {
          "imagesrc": "https://upload.wikimedia.org/wikipedia/commons/6/62/Sabarimala_2.jpg",
          "name": "Sabarimala Temple",
          "description": "One of the largest annual pilgrimage sites in the world, dedicated to Lord Ayyappa."
        },
        {
          "imagesrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqoxqelUBQih-Kjn2ZidaDeQwtvL_AfhPWxA&s",
          "name": "Konni Forest Reserve",
          "description": "A sanctuary known for elephant training and lush forest trails."
        },
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/e4/2e/8b/aranmula-parthasarathy.jpg?w=1200&h=1200&s=1",
          "name": "Aranmula Parthasarathy Temple",
          "description": "A historic temple renowned for its annual boat race and ancient architecture."
        },
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/35/45/b8/konni-adavi-eco-tourism.jpg?w=1200&h=-1&s=1",
          "name": "Adavi Eco-tourism",
          "description": "A nature lover’s paradise offering coracle boat rides and scenic beauty."
        }
      ]
    },
    {
      "id": 4,
      "name": "Alappuzha",
      "image1": "https://media-cdn.tripadvisor.com/media/photo-c/1280x250/09/f4/b0/b7/alappuzha-beach.jpg",
      "image2": "https://www.seawatersports.com/img/newimage/places/chinese-fishing-nets.png",
      "introduction": "Alappuzha, also known as Alleppey, is famous for its houseboats, backwaters, and picturesque canals. One of the most popular places to visit in the world is Alleppey Backwaters. The calm backwater cruises are something you can only do once in your life. Alappuzha is also known as the “Venice of the East.” Houseboat cruises are a popular way to see nature at its best in this city. Alappuzha Beach is the site of the 19th-century Alappuzha Lighthouse. The city's Mullakkal Temple features a traditional design. Punnamada Lake's snake boat races are a well-known annual event.",
      "top_attractions": [
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/5e/59/d4/alleppey-backwater-tour.jpg?w=1200&h=1200&s=1",
          "name": "Alleppey Backwaters",
          "description": "Famous for houseboat cruises and serene waters, offering a unique way to explore Kerala's landscape."
        },
        {
          "imagesrc": "https://media-cdn.tripadvisor.com/media/photo-c/1280x250/09/f4/b0/b7/alappuzha-beach.jpg",
          "name": "Alappuzha Beach",
          "description": "Known for its beautiful sunsets and the historic Alappuzha Lighthouse."
        },
        {
          "imagesrc": "https://media-cdn.tripadvisor.com/media/photo-s/1d/bf/92/bc/entrance-to-the-small.jpg",
          "name": "Krishnapuram Palace",
          "description": "An 18th-century palace known for its mural paintings and traditional Kerala architecture."
        },
        {
          "imagesrc": "https://www.keralatourism.org/images/destination/mobile/pathiramanal20150811072911_536_2.jpg",
          "name": "Pathiramanal Island",
          "description": "A small island on the backwaters known for bird watching and its scenic environment."
        },
        {
          "imagesrc": "https://www.bluebirdtravels.in/wp-content/uploads/uncategorized/mannarshala-temple-1200x1200-cropped.jpg",
          "name": "Mannarasala Temple",
          "description": "A unique temple dedicated to serpent gods, surrounded by a forest."
        },
        {
          "imagesrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOQWag9vz2KDgSFbUCp4r0vFeslyRdn9ibOg&s",
          "name": "Champakulam Church",
          "description": "One of the oldest Christian churches in Kerala, renowned for its historic and architectural significance."
        }
      ]
    },
    {
      "id": 5,
      "name": "Kottayam",
      "image1": "https://www.keralatourism.org/images/destination/large/malarickal_village20191022103606_669_1.jpg",
      "image2": "https://kumarakomhouseboatclub.com/wp-content/uploads/sites/2/2018/08/kumarakom-bird-sanctuary-birds.jpg",
      "introduction": "Kottayam is known for its literacy rate, rubber plantations, and as a gateway to the backwaters. The district is home to several important religious and historic sites. Most of India's natural rubber originates from the acres of well-kept plantations of Kottayam, also home to the Rubber Board. Kottayam is also called as “Akshara Nagari” which means the “city of letters” considering its contribution to print media and literature.",
      "top_attractions": [
        {
          "imagesrc": "https://kumarakomhouseboatclub.com/wp-content/uploads/sites/2/2018/08/kumarakom-bird-sanctuary-birds.jpg",
          "name": "Kumarakom Bird Sanctuary",
          "description": "A popular bird-watching destination situated on the banks of Vembanad Lake."
        },
        {
          "imagesrc": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Pambady_Rajan_carrying_Idol_of_vaikom_mahadeva_temple.jpg/1200px-Pambady_Rajan_carrying_Idol_of_vaikom_mahadeva_temple.jpg",
          "name": "Vaikom Mahadeva Temple",
          "description": "An ancient temple dedicated to Lord Shiva, known for its traditional Kerala architecture."
        },
        {
          "imagesrc": "https://www.seawatersports.com/img/newimage/places/elaveezhapoonchira.png",
          "name": "Elaveezhapoonchira",
          "description": "A scenic hill station offering panoramic views of the surrounding hills and valleys."
        },
        {
          "imagesrc": "https://tripinic.com/wp-content/uploads/2023/03/Thazhathangady-Juma-Masjid-jpg.webp",
          "name": "Thazhathangady Juma Masjid",
          "description": "One of the oldest mosques in India, known for its exquisite wood carvings and architectural beauty."
        },
        {
          "imagesrc": "https://www.trawell.in/admin/images/upload/963467586Illikkal.jpg",
          "name": "Illikkal Kallu",
          "description": "A majestic rock formation offering trekking opportunities and stunning views."
        },
        {
          "imagesrc": "https://www.ekeralatourism.net/wp-content/uploads/2016/11/kumarakom-banner.jpg",
          "name": "Kumarakom Backwaters",
          "description": "Famous for its houseboat cruises and picturesque backwater landscapes."
        }
      ]
    },
    {
      "id": 6,
      "name": "Idukki",
      "image1": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Kurunji._..jpg",
      "image2": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/2e/0a/83/img-20161221-wa0015-largejpg.jpg?w=1400&h=1400&s=1",
      "introduction": "Idukki is renowned for its dense forests, wildlife sanctuaries, and tea plantations. It's a major tourist destination with attractions like Munnar and Thekkady. Idukki district is famous for its rich flora and fauna. It is home to the popular Eravikulam National Park and is characterized by the Anamudi mountain. Idukki is one of the greenest districts of Kerala. 'Ellum kappayum' which is popularly known as 'Asiad' or kappa biryani (beef and tapioca), ellu curry and idiyirachi are some of their unique items. Besides, delicious curries and dishes cooked with country chicken, home-grown pork and rabbit are in the list of Idukki's favourite dishes.",
      "top_attractions": [
        {
          "imagesrc": "https://www.keralatourism.org/images/destination/mobile/munnar20131031131946_202_4.jpg",
          "name": "Munnar",
          "description": "A picturesque hill station known for its tea gardens, rolling hills, and pleasant climate."
        },
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/d9/5f/05/idukki-dam.jpg?w=1200&h=-1&s=1",
          "name": "Idukki Arch Dam",
          "description": "A magnificent arch dam constructed across the Periyar River, offering stunning views."
        },
        {
          "imagesrc": "https://www.munnar.holiday/munnartourism/wp-content/uploads/2019/06/anamudi-peak-munnar-kerala.jpg",
          "name": "Anamudi Peak",
          "description": "The highest peak in South India, popular for trekking and wildlife spotting."
        },
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/6b/09/70/thekkady.jpg?w=1400&h=1400&s=1",
          "name": "Thekkady",
          "description": "Home to the Periyar Wildlife Sanctuary, famous for its dense forests and wildlife."
        },
        {
          "imagesrc": "https://www.keralatourism.org/images/eco-tourism/destinations/Marayoor.jpg",
          "name": "Marayoor",
          "description": "Renowned for its natural sandalwood forests and prehistoric dolmens."
        },
        {
          "imagesrc": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Kurunji._..jpg",
          "name": "Eravikulam National Park",
          "description": "Famous for its endangered Nilgiri Tahr and the blooming of Neelakurinji flowers once every twelve years."
        }
      ]
    },
    {
      "id": 7,
      "name": "Ernakulam",
      "image1": "https://www.seawatersports.com/img/newimage/places/chinese-fishing-nets.png",
      "image2": "https://www.trawell.in/admin/images/upload/486072642MarineDrive_Main.jpg",
      "introduction": "Ernakulam, encompassing the city of Kochi, is a bustling metropolitan area and a major commercial hub of Kerala. Known for its historical landmarks, vibrant culture, and beautiful coastline. Accounts by Italian explorers Nicolo Conti (15th century), and Fra Paoline in the 17th century say that it was called Kochchi, named after the river connecting the backwaters to the sea. After the arrival of the Portuguese, and later the British, the name Cochin stuck as the official appellation.",
      "top_attractions": [
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/56/6b/41/caption.jpg?w=1200&h=-1&s=1",
          "name": "Fort Kochi",
          "description": "Historic area known for its colonial architecture, Chinese fishing nets, and vibrant arts scene."
        },
        {
          "imagesrc": "https://www.trawell.in/admin/images/upload/486072642MarineDrive_Main.jpg",
          "name": "Marine Drive",
          "description": "A picturesque promenade in Kochi offering beautiful views of the backwaters and the Kochi Harbour."
        },
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/91/9d/c8/paradesi-synagogue.jpg?w=1200&h=1200&s=1",
          "name": "Paradesi Synagogue",
          "description": "The oldest active synagogue in the Commonwealth of Nations, located in the Jew Town area of Kochi."
        },
        {
          "imagesrc": "https://upload.wikimedia.org/wikipedia/commons/3/34/St_Francis_Church_Fort_Kochi_DSC_1048.JPG",
          "name": "St. Francis Church",
          "description": "One of the oldest European churches in India, originally built in 1503."
        },
        {
          "imagesrc": "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/2024/06/wikimedia.org_.jpg",
          "name": "Mattancherry Palace",
          "description": "Also known as the Dutch Palace, featuring Kerala murals depicting Hindu temple art."
        },
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/c6/77/bd/lulu.jpg?w=1200&h=-1&s=1",
          "name": "Lulu Mall",
          "description": "One of the largest shopping malls in India, offering a wide range of shopping, dining, and entertainment options."
        }
      ]
    },
    {
      "id": 8,
      "name": "Thrissur",
      "image1": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Kudamatom_at_thrissur_pooram_2013_7618.JPG",
      "image2": "https://www.keralatourism.org/images/christianity/image/large/our-lady-of-lourdes-metropolitan-cathedral-east-fort-kizhakkumpattukara-thrissur_large.jpg",
      "introduction": "Thrissur, often referred to as the 'Cultural Capital of Kerala', is known for its vibrant festivals, historic temples, and cultural heritage. The town is built on an elevated ground, at the apex of which is the famous “VADAKKUMNATHAN” Temple. A place of great antiquity, Thrissur was also known as “VRISHABHADRIPURAM” and “TEN KAILASAM” in ancient days. Thrissur is known as the cultural capital of Kerala, and the land of Poorams. The district is known for its ancient temples, churches, and mosques.",
      "top_attractions": [
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/4c/17/ec/vadakkunnathan-temple.jpg?w=1200&h=-1&s=1",
          "name": "Vadakkunnathan Temple",
          "description": "An ancient Hindu temple dedicated to Lord Shiva, renowned for its classic Kerala architecture."
        },
        {
          "imagesrc": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Kudamatom_at_thrissur_pooram_2013_7618.JPG",
          "name": "Thrissur Pooram",
          "description": "One of the most famous and spectacular temple festivals in Kerala, held at the Vadakkunnathan Temple."
        },
        {
          "imagesrc": "https://www.keralatourism.org/images/christianity/image/large/our-lady-of-lourdes-metropolitan-cathedral-east-fort-kizhakkumpattukara-thrissur_large.jpg",
          "name": "Our Lady of Lourdes Cathedral",
          "description": "A prominent Roman Catholic church known for its Gothic style architecture."
        },
        {
          "imagesrc": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Kerala_Sangeetha_Nadaka_Academy.jpg/1200px-Kerala_Sangeetha_Nadaka_Academy.jpg",
          "name": "Kerala Sangeetha Nataka Akademi",
          "description": "An institution dedicated to the promotion of music, dance, and drama in Kerala."
        },
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/07/49/fd/beauty-at-its-bestin.jpg?w=1200&h=1200&s=1",
          "name": "Athirappilly Waterfalls",
          "description": "Known as the 'Niagara of India', these waterfalls are a popular tourist destination."
        },
        {
          "imagesrc": "https://media-cdn.tripadvisor.com/media/photo-s/15/44/38/13/guruvayur-temple.jpg",
          "name": "Guruvayur Temple",
          "description": "One of the most significant temples in Kerala, dedicated to Lord Krishna."
        }
      ]
    },
    {
      "id": 9,
      "name": "Palakkad",
      "image1": "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/08/acj-2908-parambikulam-tiger-reserve-og.jpg",
      "image2": "https://media.istockphoto.com/id/1736512682/photo/kollengode-palakkad-a-border-village-in-palakkad-district-kerala.webp?b=1&s=170667a&w=0&k=20&c=dt-lh07EDWnk5bMZ9FWry3rYLkSyTQC77ku2Nk1vPrw=",
      "introduction": "Palakkad, known as the 'Gateway of Kerala', is renowned for its natural beauty, historic landmarks, and rich cultural heritage. It is famous for its paddy fields and the Western Ghats. Palakkad is famous for the ancient Palakkad Fort, which is in the heart of the city. The famous Malayalam poet and the founder of the art form Thullal, Kunjan Nambiyar was born in Killikurissimangalam in Palakkad district. There is a famous school of Kathakali here called the Kalluvazhichitta. Palakkad district is famous for the Carnatic music and singers.",
      "top_attractions": [
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/7c/99/42/img-5743-largejpg.jpg?w=1200&h=1200&s=1",
          "name": "Palakkad Fort",
          "description": "A historical fort built by Hyder Ali in the 18th century, known for its architectural splendor."
        },
        {
          "imagesrc": "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/08/acj-2908-parambikulam-tiger-reserve-og.jpg",
          "name": "Parambikulam Tiger Reserve",
          "description": "A well-protected ecological paradise and a haven for wildlife enthusiasts."
        },
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/89/e3/43/view-of-pothundy-reservoir.jpg?w=1200&h=1200&s=1",
          "name": "Nelliyampathy Hills",
          "description": "A hill station known for its lush green valleys, misty mountains, and tea plantations."
        },
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/42/16/a3/malampuzha-dam.jpg?w=1200&h=1200&s=1",
          "name": "Malampuzha Dam and Gardens",
          "description": "Famous for its rock garden, ropeway, and boating facilities, offering a picturesque setting."
        },
        {
          "imagesrc": "https://www.sotc.in/blog/wp-content/uploads/2022/11/kerala_thekkady.jpg",
          "name": "Silent Valley National Park",
          "description": "A pristine stretch of tropical rainforest with rich biodiversity, ideal for nature enthusiasts."
        },
        {
          "imagesrc": "https://upload.wikimedia.org/wikipedia/commons/b/b8/Kalpathy_Palakkad.jpg",
          "name": "Kalpathy Heritage Village",
          "description": "Known for its traditional agraharam lifestyle and the famous Kalpathy Ratholsavam (chariot festival)."
        }
      ]
    },
    {
      "id": 10,
      "name": "Malappuram",
      "image1": "https://content.jdmagicbox.com/comp/malappuram/w9/9999px483.x483.170607182105.r2w9/catalogue/mini-ooty-view-point-arimbra-malappuram-tourist-attraction-polndqycv9.jpg",
      "image2": "https://upload.wikimedia.org/wikipedia/commons/a/af/Kodikuthimala%2C_Malappuram.jpg",
      "introduction": "Malappuram, rich in culture and history, is known for its hilly terrain, lush greenery, and historic sites. The district is famous for its festivals and vibrant arts. Malappuram literally means a land atop hills and the region is enriched by three great rivers flowing through it – the Chaliyar, Kadalundi and the Bharathapuzha. Malappuram has made numerous contributions to the cultural heritage of Kerala. It was a famous centre for Hindu - Vedic learning and Islamic philosophy and a place of cultural heritage. Malappuram has a rich and eventful history.",
      "top_attractions": [
        {
          "imagesrc": "https://upload.wikimedia.org/wikipedia/commons/a/af/Kodikuthimala%2C_Malappuram.jpg",
          "name": "Kodikuthimala",
          "description": "Often referred to as the 'Ooty of Malappuram', this hill station offers panoramic views and trekking opportunities."
        },
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/41/2c/6f/kottakunnu-park.jpg?w=1200&h=1200&s=1",
          "name": "Kottakkunnu",
          "description": "A popular picnic spot known for its scenic beauty and historical significance."
        },
        {
          "imagesrc": "https://upload.wikimedia.org/wikipedia/commons/e/e5/Thirunavaya_%285%29.jpg",
          "name": "Thirunavaya Temple",
          "description": "An ancient temple situated on the banks of the Bharathapuzha River, known for its cultural and historical importance."
        },
        {
          "imagesrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbh2iooUM8c0Up8vlghCJSyacCYkNZZJkCjA&s",
          "name": "Ponnani Juma Masjid",
          "description": "A historic mosque known for its unique architecture and cultural significance."
        },
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/e4/ee/be/img-20181001-wa0027-largejpg.jpg?w=1200&h=-1&s=1",
          "name": "Nilambur Teak Museum",
          "description": "A unique museum dedicated to teak, showcasing its history and significance."
        },
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/d3/fe/90/bharathapuzha-river.jpg?w=1200&h=-1&s=1",
          "name": "Bharathapuzha River",
          "description": "Also known as Nila, it is the second-longest river in Kerala, significant for its cultural heritage."
        }
      ]
    },
    {
      "id": 11,
      "name": "Kozhikode",
      "image1": "https://www.dtpckozhikode.com/uploads/picture_gallery/gallery_images/kozhikode-beach-2-20230509170339267388.webp",
      "image2": "https://static.toiimg.com/photo/72181280.cms",
      "introduction": "Kozhikode, also known as Calicut, is a city with a rich history and vibrant culture. Known for its beaches, historic sites, and as the place where Vasco da Gama first landed in India. Kozhikode is famous for its Malabar cuisine, known for its rich flavours and use of spices. From traditional Kerala meals to mouth-watering seafood, the city offers a culinary journey like no other.  The city is renowned for its role as an ancient trading hub and the place where Portuguese explorer Vasco da Gama first landed in India in 1498.",
      "top_attractions": [
        {
          "imagesrc": "https://media1.thrillophilia.com/filestore/2avtoejrqvk2f56od0c0okrujfpr_1584439345_shutterstock_1023261916.jpg?w=400&dpr=2",
          "name": "Kozhikode Beach",
          "description": "A popular spot for sunset views, seafood, and leisure activities."
        },
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/2f/ee/ad/beypore-beach.jpg?w=1200&h=1200&s=1",
          "name": "Beypore",
          "description": "A historic port town known for its shipbuilding yard and the famous Beypore Uru (traditional wooden ships)."
        },
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/d5/18/2b/psx-20170319-125048-largejpg.jpg?w=1200&h=1200&s=1",
          "name": "Kappad Beach",
          "description": "The historic beach where Vasco da Gama landed in 1498, marking the start of the European influence in India."
        },
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/f0/a0/51/on-the-way-to-falls.jpg?w=1200&h=1200&s=1",
          "name": "Thusharagiri Waterfalls",
          "description": "A scenic waterfall offering trekking opportunities and lush greenery."
        },
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/76/88/a2/img-20180904-071622-largejpg.jpg?w=1200&h=1200&s=1",
          "name": "Tali Temple",
          "description": "An ancient temple dedicated to Lord Shiva, known for its historical and architectural significance."
        },
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/f9/f1/a9/front-view.jpg?w=1200&h=-1&s=1",
          "name": "Mishkal Mosque",
          "description": "A 650-year-old mosque known for its unique architecture and historical importance."
        }
      ]
    },
    {
      "id": 12,
      "name": "Wayanad",
      "image1": "https://wayanadtourism.co.in/images/places-to-visit/headers/wayanad-wildlife-sanctuary-tourism-entry-fee-timings-holidays-reviews-header.jpg",
      "image2": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/3b/cb/a7/banasura-sagar-dam.jpg?w=1200&h=-1&s=1",
      "introduction": "Wayanad, a rural district in Kerala, is known for its scenic landscapes, wildlife sanctuaries, and spice plantations. It's a popular destination for nature lovers and adventure enthusiasts. Wayanad is unique in that it is situated in an elevated picturesque mountainous plateau in the Western Ghats. The vast stretches of mist - capped mountains, green meadows of valleys, white water springs, blue water lakes and wild forests express the splendid natural beauty of Wayanad.",
      "top_attractions": [
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/89/f3/67/entrance-path.jpg?w=1200&h=1200&s=1",
          "name": "Edakkal Caves",
          "description": "Prehistoric caves known for their ancient petroglyphs and picturesque views."
        },
        {
          "imagesrc": "https://miro.medium.com/v2/resize:fit:1158/1*7PSB5UjryZjBTlRkHoGJtQ.jpeg",
          "name": "Chembra Peak",
          "description": "The highest peak in Wayanad, offering trekking trails and a heart-shaped lake."
        },
        {
          "imagesrc": "https://wayanadtourism.co.in/images/places-to-visit/headers/wayanad-wildlife-sanctuary-tourism-entry-fee-timings-holidays-reviews-header.jpg",
          "name": "Wayanad Wildlife Sanctuary",
          "description": "A haven for wildlife enthusiasts, home to elephants, tigers, and various bird species."
        },
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/3b/cb/a7/banasura-sagar-dam.jpg?w=1200&h=-1&s=1",
          "name": "Banasura Sagar Dam",
          "description": "The largest earthen dam in India, offering boating and scenic views."
        },
        {
          "imagesrc": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Soochipara_Falls%2C_Wayanad_Kerala%2C_2013_%28Landscape%29.jpeg",
          "name": "Soochipara Falls",
          "description": "A three-tiered waterfall offering opportunities for swimming and rock climbing."
        },
        {
          "imagesrc": "https://www.keralatourism.org/images/malabar/static-banner/large/Thirunelly_Temple-10012020053415.JPG",
          "name": "Thirunelli Temple",
          "description": "An ancient temple surrounded by mountains and forests, dedicated to Lord Vishnu."
        }
      ]
    },
    {
      "id": 13,
      "name": "Kannur",
      "image1": "https://images.squarespace-cdn.com/content/v1/53172b1be4b0cc8a5401db4a/1579530968648-CO6E6TE0QM444TRM19FQ/2L1A2658-2.jpg?format=2500w",
      "image2": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Muzhappilangad_Drive-in_Beach_2.jpg",
      "introduction": "Kannur, also known as Cannanore, is a coastal city in northern Kerala. It's known for its beaches, historic forts, and rich cultural heritage, including the traditional art form of Theyyam. Kannur is dubbed as the City of Looms and Lores, thanks to the flourishing handloom industry and folk art called Theyyam. Theyyamis a ritualistic artform encompassing dance, music and mime, where the artist dons the guise of God. Kannur is believed to have got its name from being the land of Kannan or Krishna.",
      "top_attractions": [
        {
          "imagesrc": "https://www.keralatourism.org/images/destination/mobile/st_angelo_fort_kannur20131105171125_83_1.jpg",
          "name": "St. Angelo Fort",
          "description": "A historic fort built by the Portuguese in 1505, offering panoramic views of the Arabian Sea."
        },
        {
          "imagesrc": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Muzhappilangad_Drive-in_Beach_2.jpg",
          "name": "Muzhappilangad Drive-in Beach",
          "description": "India's only drive-in beach, stretching over 4 kilometers along the Malabar Coast."
        },
        {
          "imagesrc": "https://www.keralatourism.org/images/destination/mobile/arakkal_kettu_museum_kannur20131031101930_84_1.jpg",
          "name": "Arakkal Museum",
          "description": "A museum dedicated to the Arakkal family, the only Muslim royal family in Kerala."
        },
        {
          "imagesrc": "https://www.holidify.com/images/cmsuploads/compressed/1024px-Parassini_SnakePark_Statue_20180526205714.JPG",
          "name": "Parassinikkadavu Snake Park",
          "description": "A unique snake park that houses a variety of snakes and other reptiles."
        },
        {
          "imagesrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxe92n8kyTftwVgAijcVIdJ8z7YBG1jIq3IA&s",
          "name": "Payyambalam Beach",
          "description": "A serene beach known for its beautiful coastline and tranquil atmosphere."
        },
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/7b/b2/b3/thalassery-fort-kerala.jpg?w=1200&h=-1&s=1",
          "name": "Thalassery Fort",
          "description": "A historical fort built by the British East India Company, showcasing colonial architecture."
        }
      ]
    },
    {
      "id": 14,
      "name": "Kasargod",
      "image1": "https://static2.tripoto.com/media/filter/tst/img/308363/TripDocument/1507707468_kasaragod1.jpg.webp",
      "image2": "https://www.keralatourism.org/images/destination/mobile/ananthapura_lake_temple_kasargod20131031101820_159_1.jpg",
      "introduction": "Kasargod, located in the northernmost part of Kerala, is known for its scenic beauty, historical forts, and diverse culture. It is famous for its coir and handloom industries. The district has famous tourist centres, including the international fame BEKAL FORT & BEACH. There are also places which can be converted to attract the tourists. Kasaragod is known as the Land of Gods, Forts, Rivers, Beautiful hills and lengthy sandy beaches.",
      "top_attractions": [
        {
          "imagesrc": "https://static2.tripoto.com/media/filter/tst/img/308363/TripDocument/1507707468_kasaragod1.jpg.webp",
          "name": "Bekal Fort",
          "description": "One of the largest and best-preserved forts in Kerala, offering stunning views of the Arabian Sea."
        },
        {
          "imagesrc": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Bakel_Fort_Beach_Kasaragod4.jpg",
          "name": "Bekal Beach",
          "description": "A beautiful beach located near Bekal Fort, known for its serene atmosphere and scenic beauty."
        },
        {
          "imagesrc": "https://www.keralatourism.org/images/destination/mobile/ananthapura_lake_temple_kasargod20131031101820_159_1.jpg",
          "name": "Ananthapura Lake Temple",
          "description": "A unique temple situated in the middle of a lake, known for its serene ambiance and historical significance."
        },
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/e3/26/55/the-palace-and-the-lawn.jpg?w=1200&h=1200&s=1",
          "name": "Chandragiri Fort",
          "description": "A historic fort built in the 17th century, offering panoramic views of the Chandragiri River and the Arabian Sea."
        },
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/56/2a/6b/madhur-temple.jpg?w=1200&h=1200&s=1",
          "name": "Madhur Temple",
          "description": "A famous Hindu temple known for its unique architecture and religious significance."
        },
        {
          "imagesrc": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/29/1f/88/kottancheri-hills.jpg?w=1200&h=-1&s=1",
          "name": "Kottancheri Hills",
          "description": "A picturesque hill station known for its trekking trails, lush greenery, and serene ambiance."
        }
      ]
    },
  ]
  item: any;
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    const districtName = this.route.snapshot.paramMap.get('title');
    if (districtName) {
      this.item = this.districts.find(
        (d) => d.name.toLowerCase() === districtName.toLowerCase()
      );
    }
    console.log(this.item);
  }

}