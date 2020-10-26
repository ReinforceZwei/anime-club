import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  data: any
  viewing: number = 0
  constructor(private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.data = [
      {
        name: "Anime Appreciation",
        image: ["assets/event-review/video_appreciation.jpg"],
        desc: "We watch anime together and share our thoughts afterward.",
      },
      {
        name: "Anime Exhibtion",
        image: [
          "assets/event-review/c3.jpg",
          "assets/event-review/anime_exhibition.jpg",
        ],
        desc: "We will share our collections related to anime and comic to all students regularly.",
      },
      {
        name: "Field trip to Japan",
        image: [
          "assets/event-review/Akihabara.webp",
          "assets/event-review/ikebukuro.jpg",
        ],
        desc: "We travel to Japan with our club members every two years.",
      },
    ]
    this.viewing = Number(this.activeRouter.snapshot.queryParamMap.get("id")) || 0;
  }
  isMain(): boolean {
    return this.router.url === "/main";
  }
  selectViewing(index: number){
    this.viewing = index;
  }
}
