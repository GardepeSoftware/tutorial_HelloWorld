import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  hello: any;
  posts: Post[];
  isEdit: boolean = false;

  constructor(private dataService: DataService) {
    console.log("constructor ran...");
  }

  ngOnInit() {
    console.log("ngOnInit ran...");

    this.name = "John Dee";
    this.age = 30;
    this.address = {
      street: "50 Titty st.",
      city: "Titty Town",
      state: "MA"
    };
    this.hobbies = ["Write code", "Watch movies", "Listen to music"];
    this.hello = "hello";

    this.dataService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  onClick() {
    this.name = "Mitchy Moo";
  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }
}

interface Address {
  street: string;
  city: string;
  state: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
