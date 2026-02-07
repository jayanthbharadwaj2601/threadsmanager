import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'interviewbuddyfrontend';
  login() {
    let url = "https://threads.net/oauth/authorize?client_id=592174793953037&redirect_uri=https://localhost:4200/Home&scope=threads_basic,threads_content_publish&response_type=code"
    
    //window.open(url, '_system');
  }
}
