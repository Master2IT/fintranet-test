import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from './memeber.interface';

@Injectable({
    providedIn: 'root',
})
export class MembersService {
    private url = 'https://jsonplaceholder.typicode.com/users'

    private headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    constructor(private http: HttpClient) { }

    findAll(): Observable<Member[]> {
        return this.http.get<Member[]>(this.url, { headers: this.headers })
    }
}