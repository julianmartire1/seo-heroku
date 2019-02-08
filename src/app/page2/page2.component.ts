import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit() {
    
    this.seo.generateTags({
      title: 'Page 2', 
      description: 'Page 2 me through this awesome search engine optimized Angular component', 
      image: 'https://firebasestorage.googleapis.com/v0/b/genio-4e880.appspot.com/o/brands%2Fnike.png?alt=media&token=a2aefdf8-56f3-4354-90e7-392fc14740de',
      slug: 'page2'
    })
  }

}
