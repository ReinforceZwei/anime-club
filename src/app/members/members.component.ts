import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: any
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.members = [
      {
        name: "John Chan",
        avatar: "/assets/members/placeholder.png",
        position: "Club Leader",
        words: ""
      },
      {
        name: "Reinforce Zwei",
        avatar: "/assets/members/reinforce.png",
        position: "Vice-leader",
        words: "I like programming and watching anime! My favorite anime is Cardcaptor Sakura."
      },
      {
        name: "Martin Cheung",
        avatar: "/assets/members/placeholder.png",
        position: "Member",
        words: ""
      },
      {
        name: "Paul Yuen",
        avatar: "/assets/members/placeholder.png",
        position: "Member",
        words: ""
      },
      {
        name: "Kelvin Lau",
        avatar: "/assets/members/placeholder.png",
        position: "Member",
        words: ""
      }
    ]
  }

  isMain(): boolean {
    return this.router.url === "/main";
  }
}
