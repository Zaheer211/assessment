import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Subject, takeUntil } from 'rxjs';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css', '../common.styles.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountComponent implements OnInit, OnDestroy {

  public pageTitle: string = 'Account Info';
  private userId = 1;
  private destroy$: Subject<void> = new Subject<void>();
  private userData: User | undefined;


  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.loadUserData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadUserData(): void {
    this.accountService.getUserData(this.userId)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (user) => {
          this.userData = user;
        },
        error: (error) => {
          // console.error(error);
          // Handle error scenarios
        }
      });
  }
}
