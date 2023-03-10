import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/loginModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: string = 'https://localhost:44314/api/auth';
  constructor(private httpClient: HttpClient) {}

  login(loginModel: LoginModel):Observable<SingleResponseModel<TokenModel>>  {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(`${this.apiUrl}/login`, loginModel);
  }
  isAuthenticated(){
    debugger;
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
}
