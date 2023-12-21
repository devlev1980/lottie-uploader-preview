import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {LottieComponent} from 'ngx-lottie';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LottieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  lottieData: any[] = [];
  url: string[] = [];
  files: any[] = [];
  names: string[] = [];

  onFileSelected(event: any) {
    this.files = event.target.files;
    for (let i = 0; i < this.files.length; i++) {
      const file = this.files[i];
      this.names.push(file.name);
     this.url.push(URL.createObjectURL(file));
      // const reader = new FileReader();
      // reader.onload = (e: any) => {
      //   this.lottieData.push(JSON.parse(e.target.result));
      // };
      // reader.readAsText(file);
    }
  }
}
