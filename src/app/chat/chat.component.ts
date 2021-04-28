import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { CometChatUI } from '../../cometchat-pro-angular-ui-kit/CometChatWorkspace/projects/angular-chat-ui-kit/src/components/CometChatUI/CometChat-Ui/cometchat-ui.module';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  constructor(private auth: AngularFireAuth, private route: Router) {}

  ngOnInit(): void {}

  public logOut(): void {
    this.auth
      .signOut()
      .then(() => this.route.navigate(['login']))
      .catch((error) => console.log(error.message));
  }
}
