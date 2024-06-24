import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { District } from '../../models/district.interface';

@Component({
  selector: 'app-district',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './district.component.html',
  styleUrl: './district.component.scss'
})
export class DistrictComponent {

data: any = [
    {
        id: 1,
        imagesrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjStBvAs1Pm8Nm3nmeRb8lKyU4X9IgtJ-jxA&s",
        title: "Thiruvananthapuram",
        description: "The capital city of Kerala, known for its historic landmarks and vibrant culture."
    },
    {
        id: 2,
        imagesrc:"https://static.wixstatic.com/media/c8e24e_389399b79d7d4ff2a10f52d619e12840~mv2.jpeg/v1/fill/w_616,h_346,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Jatayu-Nature-Park-In-Kerala.jpeg",
        title: "Kollam",
        description: "A coastal city famous for its cashew industry and scenic backwaters."
    },
    {
        id: 3,
        imagesrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/cc/c9/1e/ready-for-the-flag.jpg?w=500&h=400&s=1",
        title: "Pathanamthitta",
        description: "Known for its religious significance, especially the Sabarimala temple."
    },
    {
        id: 4,
        imagesrc: "https://keralatourismmart.com/wp-content/uploads/2018/04/alleppey-backwater.jpg",
        title: "Alappuzha",
        description: "Often referred to as the 'Venice of the East' due to its picturesque canals and backwaters."
    },
    {
        id: 5,
        imagesrc: "https://mangomeadows.in/wp-content/uploads/2016/02/boating1.jpg",
        title: "Kottayam",
        description: "Renowned for its rubber plantations and as a hub of education and literature."
    },
    {
        id: 6,
        imagesrc: "https://www.dtpcidukki.com/uploads/picture_gallery/gallery_images/ramakalmedu-idukki-20230317084014858023.webp",
        title: "Idukki",
        description: "A hilly district famous for its spice plantations, wildlife sanctuaries, and the Idukki Dam."
    },
    {
        id: 7,
        imagesrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/29/93/c7/front.jpg?w=400&h=300&s=1",
        title: "Ernakulam",
        description: "Home to the commercial capital, Kochi, known for its port and vibrant economy."
    },
    {
        id: 8,
        imagesrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Kudamatom_at_thrissur_pooram_2013_7618.JPG/800px-Kudamatom_at_thrissur_pooram_2013_7618.JPG",
        title: "Thrissur",
        description: "Known as the cultural capital of Kerala, famous for the Thrissur Pooram festival."
    },
    {
        id: 9,
        imagesrc: "https://qph.cf2.quoracdn.net/main-qimg-33ab5824d6e408c49ea6b59eeb1076ad-lq",
        title: "Palakkad",
        description: "Rich in natural beauty, often referred to as the 'Granary of Kerala.'"
    },
    {
        id: 10,
        imagesrc:"https://media2.thrillophilia.com/images/photos/000/004/150/original/1551449181_1551077386_Nilambur-554644_0.jpg.jpg?gravity=center&width=1280&height=642&crop=fill&quality=auto&fetch_format=auto&flags=strip_profile&format=jpg&sign_url=true",
        title: "Malappuram",
        description: "Known for its rich history and cultural heritage, including the Malappuram Juma Masjid."
    },
    {
        id: 11,
        imagesrc:"https://www.nativeplanet.com/img/2023/08/scenic-view-of-kozhikode-beach_1693469197165-1200x675-20230831134602.jpg",
        title: "Kozhikode",
        description: "Historically significant as the landing place of Vasco da Gama, known for its trade and cuisine."
    },
    {
        id: 12,
        imagesrc:"https://discoverankit.com/wp-content/uploads/2024/06/Wayanad-1.jpg",
        title: "Wayanad",
        description: "A lush green district with rich wildlife, waterfalls, and tribal heritage."
    },
    {
        id: 13,
        imagesrc: "https://pbs.twimg.com/media/F0qFmsMWYAAppbH.jpg",
        title: "Kannur",
        description: "Known for its beautiful beaches, handlooms, and the traditional Theyyam art form."
    },
    {
        id: 14,
        imagesrc: "https://keralainformations.wordpress.com/wp-content/uploads/2011/08/bekal-fort2.jpg",
        title: "Kasargod",
        description: "The northernmost district, known for its diverse culture and the historic Bekal Fort."
    }
]

}
