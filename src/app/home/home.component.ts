import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public code:any
  public access_token:any
  public success:boolean
  ngOnInit() {
    let params = new URLSearchParams(document.location.search);
    this.code = params.get("code");
    console.log("code: ",this.code);
    
    this.access_token = this.http.get('https://graph.threads.net/oauth/access_token?client_id=592174793953037&client_secret=cfb1c2ec1f568ba4964e0f688b66c08e&code='+this.code+'&grant_type=authorization_code&redirect_uri=https://localhost:4200/Home',{observe:"response"}).subscribe((res)=>{
      console.log(res.body)
      let body = res.body
      this.access_token = body
    })
    console.log(this.access_token['body']);
  }
  constructor(public http:HttpClient){
    this.success = false
  }
  post(post_type:string,number_of_posts:string)
  {
    console.log(this.access_token['access_token']);
    this.success=true
    let n = Number(number_of_posts)
    for(let i=0;i<n;i++)
    {
      this.http.post("https://threads-manager.onrender.com/postupload",{"access_token":this.access_token['access_token'],"post_type":post_type},{"observe":"response"}).subscribe(response=>{
        let body = response.body;
        console.log(body);
        if(response.status!=200)
        {
          this.success=false
        }
      })
    }
  }

}
