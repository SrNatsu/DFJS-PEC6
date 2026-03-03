import { Component, signal } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { ArticleList } from './article-list/article-list';
import { ArticleNewTemplate } from './article-new-template/article-new-template';
import { ArticleNewReactive } from './article-new-reactive/article-new-reactive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, ArticleList, ArticleNewTemplate, ArticleNewReactive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ecommerce');

  view: string = 'list';

  onViewChange(newView: string): void {
    this.view = newView;
  }
}
