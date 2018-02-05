import {Component} from '@angular/core';
import { EventsPage } from '../about/events';
import { CommentPage } from '../comment/comment';
import { FeedPage } from '../feed/feed';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = FeedPage;
  tab2Root = CommentPage;
  tab3Root = EventsPage;

  constructor() {}
}
