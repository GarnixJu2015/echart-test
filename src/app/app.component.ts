import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  components = [
    { name: 'test1',  route: 'test1' },
    { name: 'test2',  route: 'test2' },
    { name: 'test3',  route: 'test3' },
    { name: 't4',  route: 't4' },
    { name: 'frame',  route: 'frame' }
  ];
}
