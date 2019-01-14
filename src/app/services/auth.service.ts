import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  getUserDetails(username, password){
    // post the details to API server and return user info
    return this.http.post('http://localhost:90/api/auth.php', {
      username,
      password
    }).subscribe(data => {
      console.log(data, " is what we received from the server");
    })
  }
}
