import { Component, OnDestroy, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Subject, takeUntil } from 'rxjs';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit, OnDestroy {

  public pageTitle: string = 'Account Info';
  private userId = 1;
  private loadUserDataUnsub$: Subject<void> = new Subject<void>();
  private userData: User | undefined;
  listItems = [
    {
      id: 1,
      label: 'Item 1',
      description: 'This is item 1'
    }
  ]

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.loadUserData();
  }

  ngOnDestroy(): void {
    this.loadUserDataUnsub$.next();
    this.loadUserDataUnsub$.complete();
  }

  loadUserData(): void {
    this.accountService.getUserData(this.userId)
      .pipe(
        takeUntil(this.loadUserDataUnsub$)
      )
      .subscribe({
        next: (user) => {
          console.log(user);
          this.userData = user;
        },
        error: (error) => {
          console.error(error);
          // Handle error scenarios
        }
      });
  }
}
