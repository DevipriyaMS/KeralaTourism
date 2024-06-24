import { Component } from '@angular/core';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss'
})
export class ExploreComponent {

  food: any = [
    {
      id: 1,
      imagesrc: "https://www.sharmispassions.com/wp-content/uploads/2020/12/20564329779_b9af3e0191_o.jpg",
      title: "Sadhya",
      category: "Food",
    },
    {
      id: 2,
      imagesrc: "https://irisholidays.com/keralatourism/wp-content/uploads/2015/05/dosa-idli-food-in-kerala.gif",
      title: "Dosa Vada",
      category: "Food",
    },
    {
      id: 3,
      imagesrc: "https://blogbox.indianeagle.com/wp-content/uploads/2014/06/puttu-kadala-among-vegetarian-delicacies-of-kerala.jpg",
      title: "Puttu & Kadala",
      category: "Food",
    },
    {
      id: 4,
      imagesrc: "https://images.immediate.co.uk/production/volatile/sites/30/2015/03/Appam-with-stew-f9e07e7.jpg",
      title: "Appam",
      category: "Food",
    },
    {
      id: 5,
      imagesrc: "https://www.holidify.com/blog/wp-content/uploads/2015/11/Ada-Pradhaman.jpg",
      title: "Payasam",
      category: "Food",
    },
    {
      id: 6,
      imagesrc: "https://th-i.thgim.com/public/life-and-style/food/surefk/article31849586.ece/alternates/FREE_1200/1MPPAROTTA",
      title: "Porotta & Beef",
      category: "Food",
    },
  ]

  artforms: any =[
    {
      id: 1,
      imagesrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEYIWqbMd-nA-al1RmI0EHNJ_YEZu3gH8jUz47l7pFZbb2ZgypsSF98jWCQRgZPmH6ryM&usqp=CAU",
      title: "Mohiniyattam",
      category: "Artform",
    },
    {
      id: 2,
      imagesrc: "https://media-cdn.tripadvisor.com/media/photo-s/0d/25/67/9d/traditional-art-form.jpg",
      title: "Theyyam",
      category: "Artform",
    },
    {
      id: 3,
      imagesrc: "https://miro.medium.com/v2/resize:fit:1400/0*UX5hYY2gauMzf0y6.jpg",
      title: "Thiruvathira",
      category: "Artform",
    },
    {
      id: 4,
      imagesrc: "https://mediaindia.eu/wp-content/uploads/2018/03/kala1.jpg",
      title: "KalariPayattu",
      category: "Artform",
    },
    {
      id: 5,
      imagesrc: "https://media.list.ly/production/109454/headline?ver=2765292149",
      title: "Pulikkali",
      category: "Artform",
    },
    {
      id: 6,
      imagesrc: "https://www.flamingotravels.co.in/blog/wp-content/uploads/2019/09/FEATURE-11.jpg",
      title: "Kathakali",
      category: "Artform",
    },
  ]

}
