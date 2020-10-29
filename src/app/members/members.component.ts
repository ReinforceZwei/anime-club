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
        avatar: "",
        position: "Club Leader",
        words: "Welcome to join us!"
      },
      {
        name: "Reinforce Zwei",
        avatar: "assets/members/reinforce.png",
        position: "Vice-leader",
        words: "I like programming and watching anime! My favorite anime is Cardcaptor Sakura."
      },
      {
        name: "Martin Cheung",
        avatar: "",
        position: "Member",
        words: "Challenge me by quoting anyone's sentence. I can tell which anime character said this word."
      },
      {
        name: "Paul Yuen",
        avatar: "",
        position: "Member",
        words: "Sasuke vs Itachi, the most memorable battle!"
      },
      {
        name: "Kelvin Lau",
        avatar: "",
        position: "Member",
        words: "Excalibur!"
      },
      {
        name: "George Yu",
        avatar: "",
        position: "Member",
        words: "I will be the Pirate King!"
      },
      {
        name: "Austin Liu",
        avatar: "",
        position: "Member",
        words: "I am wondering how people react to Sakamoto."
      },
      {
        name: "Richard Ng",
        avatar: "",
        position: "Member",
        words: "No need to feel strange when hear someone says 'Excalibur!' or 'I will be the Pirate King!'"
      },
    ]
  }

  isMain(): boolean {
    return this.router.url === "/main";
  }
}
