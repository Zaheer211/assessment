import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Output, Renderer2 } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subject, filter, takeUntil } from 'rxjs';
import { EmailValidators } from '../../validators/email-validators';

interface emailFormData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-edit-basic-info',
  templateUrl: './edit-basic-info.component.html',
  styleUrl: './edit-basic-info.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditBasicInfoComponent {

  @Output() public onSubmitEmailEditModal: Subject<emailFormData> = new Subject<emailFormData>();

  private isOpenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isOpen$ = this.isOpenSubject.asObservable().pipe(filter(value => value !== null)); // Add filter here
  public isOpen = false;
  public openEmailEditModal$: Subject<boolean> = new Subject<boolean>();
  private componentDestroy$: Subject<void> = new Subject<void>();
  public emailForm: FormGroup;
  public email: FormControl;
  public password: FormControl;
  public bottomModalBreakPoints = [0, 0.25, 0.5, 0.75]
  public intialBottomModalBreakPoint = 0.5;
  public onMobile = false;

  constructor(
    private formBuilder: FormBuilder,
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private cdr: ChangeDetectorRef
  ) {
    this.email = new FormControl<string | null>('', [
      Validators.required,
      EmailValidators.isEmail(),
    ]);
    this.password = new FormControl<string | null>('', [Validators.required]);
    this.emailForm = this.formBuilder.group({
      email: this.email,
      password: this.password,
    });
  }

  ngOnInit(): void {
    this.openEmailEditModal$
      .pipe(takeUntil(this.componentDestroy$))
      .subscribe({
        next: (isOpen: boolean) => {
          if (isOpen) {
            this.addPreventScroll();
          }
          this.isOpen = isOpen;
          this.cdr.detectChanges();
          this.isOpenSubject.next(isOpen);
        }
      })
  }

  ngOnDestroy(): void {
    this.componentDestroy$.next();
    this.componentDestroy$.complete();
  }

  public onSubmitEditModal(): void {
    if (this.emailForm.valid) {

      // Clost the modal
      this.isOpen = false;
      this.cdr.detectChanges();
      this.isOpenSubject.next(false);

      let formData: emailFormData = {
        email: this.emailForm.value.email,
        password: this.emailForm.value.password
      }

      // TODO: Send form data to account component
      this.onSubmitEmailEditModal.next(formData);
      this.removePreventScroll();
    } else {
      // TODO: Show error message
    }
  }

  private addPreventScroll(): void {
    this.renderer.addClass(this.elementRef.nativeElement.ownerDocument.body, 'prevent-scroll');
  }

  public removePreventScroll(): void {
    this.renderer.removeClass(this.elementRef.nativeElement.ownerDocument.body, 'prevent-scroll');
  }

}
