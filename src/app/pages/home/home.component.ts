import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './components/child/child.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ChildComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
