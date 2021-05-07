import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { CometChat } from '@cometchat-pro/chat';
import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loading: boolean = false;
  user: any = null;

  constructor(private auth: AngularFireAuth, private route: Router) {
    this.auth.authState.subscribe((authState) => (this.user = authState));
  }

  ngOnInit(): void {
  }

  public submit(form: NgForm): void {
    if (form.valid) {
      this.loading = true
      const photoURL = form.value.avatar
      const theme = form.value.theme

      this.auth.authState.subscribe((authState) => {
        authState.updateProfile({photoURL})
        .then(() => this.setProfile(photoURL, theme))
        .catch((error) => {
          console.log(error.message)
          alert(error.message)
          this.loading = false
        })
      });
    }
  }

  private setProfile(avatar: string, theme: string) {
    const authKey = environment.AUTH_KEY;
    const uid = this.user.uid;

    var user = new CometChat.User(uid);
    if (!avatar.includes('base64')) user.setAvatar(avatar);
    user.setMetadata({avatar, theme});

    CometChat.updateUser(user, authKey)
    .then(() => this.route.navigate(['']))
    .catch((error) => {
      console.log(error.message)
      alert(error.message)
      this.loading = false
    });
  }

}
