import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {
  data: any
  constructor() { }

  ngOnInit(): void {
    this.data = [
      {
        anime: "Cardcaptor Sakura",
        cover: "assets/anime/Cardcaptor_Sakura.jpg",
        by: "Reinforce Zwei",
        wiki: "https://en.wikipedia.org/wiki/Cardcaptor_Sakura"
      },
      {
        anime: "One Punch",
        cover: "assets/anime/One-Punch_Man.jpg",
        by: "John Chan",
        wiki: "https://zh.wikipedia.org/wiki/%E4%B8%80%E6%8B%B3%E8%B6%85%E4%BA%BA"
      },
      {
        anime: "The Disastrous Life of Saiki K.",
        cover: "assets/anime/Saiki_Kusuo_no_Sainan.jpg",
        by: "Martin Cheung",
        wiki: "https://zh.wikipedia.org/wiki/%E9%BD%8A%E6%9C%A8%E6%A5%A0%E9%9B%84%E7%9A%84%E7%81%BD%E9%9B%A3"
      },
      {
        anime: "Fate/Zero",
        cover: "assets/anime/fate_zero.jpg",
        by: "Kelvin Lau",
        wiki: "https://zh.wikipedia.org/wiki/Fate/Zero"
      },
      {
        anime: "Naruto",
        cover: "assets/anime/naruto.jpg",
        by: "Paul Yuen",
        wiki: "https://en.wikipedia.org/wiki/Naruto"
      },
      {
        anime: "ONE PIECE",
        cover: "assets/anime/one_peace.jpg",
        by: "George Yu",
        wiki: "https://zh.wikipedia.org/wiki/ONE_PIECE"
      },
      {
        anime: "Haven't You Heard? I'm Sakamoto",
        cover: "assets/anime/sakamoto.jpg",
        by: "Austin Liu",
        wiki: "https://zh.wikipedia.org/wiki/%E5%9C%A8%E4%B8%8B%E5%9D%82%E6%9C%AC%EF%BC%8C%E6%9C%89%E4%BD%95%E8%B2%B4%E5%B9%B9%EF%BC%9F"
      },
    ]
  }

  
}
