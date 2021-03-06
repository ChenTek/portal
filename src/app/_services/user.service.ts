﻿import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { this.displayHeaders(); }
  displayHeaders(){
    let header = new HttpHeaders();
   // header.append('token','22');
          console.log('Authorization', header.get('Authorization'));
      
    }
    
    getAll() {
        return this.http.get<any>('');//CHECK FOR AUTH HEADER TEMP!
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id);
    }

    create(user: User) {
        return this.http.post('/api/users', user);
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id);
    }
}