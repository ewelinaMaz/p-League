import { Component, OnInit } from '@angular/core';

interface news {
  title: string;
  image: string;
  description: string;
}

const NEWS: news[] = [
  {
    title: 'Next clashes',
    image: 'assets/images/fans.jpeg',
    description:
      'check where and when your favorite team will play the next match',
  },
  {
    title: 'Next clashes',
    image: 'assets/images/fans.jpeg',
    description:
      'check where and when your favorite team will play the next match',
  },
  {
    title: 'Next clashes',
    image: 'assets/images/fans.jpeg',
    description:
      'check where and when your favorite team will play the next match',
  },
  {
    title: 'Next clashes',
    image: 'assets/images/fans.jpeg',
    description:
      'check where and when your favorite team will play the next match',
  },
];
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
})
export class WelcomePageComponent implements OnInit {
  news = NEWS;
  constructor() {}

  ngOnInit(): void {}
}
