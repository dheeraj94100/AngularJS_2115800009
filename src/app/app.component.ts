import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  template: `
    <div>
      <h1>Hello {{ username }} from BridgeLabzz</h1>
      <img [src]="imgSrc" alt="BridgeLabzz Logo" (click)="onClick($event)"/>
      <br>
      <div>
        <input [(ngModel)]="username" (input)="onInput($event)" />
        <span>{{ nameError }}</span>
      </div>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [`
    img {
      width: 200px; /* Example: Set width */
      height: auto; /* Maintain aspect ratio */
      border-radius: 10px; /* Rounded corners */
      cursor: pointer; /* Indicate clickable image */
    }
    span {
      margin-left: 10px;
      color: red;
      font-size: 12px;
    }
  `],
})
export class AppComponent {
  title = 'BridgeLabzz';
  imgSrc = 'https://i.pinimg.com/736x/71/d9/a9/71d9a9a5614ec8a9a17079ace15f10a0.jpg'; 
  username: string = '';
  nameError: string = '';

  ngOnInit(): void {
    this.title = 'Hello from BridgeLabzz';
  }

  onClick(event: MouseEvent): void {
    console.log('Clicked!', event);
    window.open('https://www.bridgelabz.com/', '_blank');
  }

  onInput(event: Event): void {  // ✅ Corrected event type
    console.log('Input event:', event);
    const nameRegx = /^[A-Z]{1}[a-z]{2,}$/;
    this.nameError = nameRegx.test(this.username) ? '' : 'Name is Incorrect';
  }
}
