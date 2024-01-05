import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private users_resource_url: string = "assets/data/users.json"

  constructor(
    private http: HttpClient
  ) { }

  public getUserData(userId: number): Observable<User | undefined> {
    return this.http.get<User[]>(this.users_resource_url).pipe(
      map((users: User[]) => users.find(user => user.id === userId)),
      catchError((error: any) => {
        console.error('Error fetching user data:', error);
        return throwError(() => new Error('Something went wrong while fetching user data.'));
      })
    );
  }


}
