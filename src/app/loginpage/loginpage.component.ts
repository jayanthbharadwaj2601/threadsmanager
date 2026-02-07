import { Component } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {
  login() {
    let url = "https://threads.net/oauth/authorize?client_id=592174793953037&redirect_uri=https://threadsmanager.netlify.app/Home&scope=threads_basic,threads_content_publish&response_type=code"
    
    window.open(url, '_system');
  }
}
