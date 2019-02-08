import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit() {

    this.seo.generateTags({
      title: 'Page 1',
      description: 'Page 1 me through this awesome search engine optimized Angular component',
      image: 'https://firebasestorage.googleapis.com/v0/b/genio-4e880.appspot.com/o/brands%2Fadidas.png?alt=media&token=6cf10f52-ef3e-40ca-9252-874bef3930ea',
      slug: 'page1'
    })
  }

}
