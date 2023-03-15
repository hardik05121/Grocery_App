import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  category_ary:any=[
    {category:'vagetables',name:'potato',quality:500,price:2,gprice:3.01,img:'1.jpeg'},
    {category:'Fruits',name:'redish',quality:500,price:2,gprice:3.01,img:'1.jpeg'},
    {category:'vagetables',name:'potato',quality:500,price:2,gprice:3.01,img:'1.jpeg'},
    {category:'Fruits',name:'redish',quality:500,price:2,gprice:3.01,img:'1.jpeg'},
    {category:'vagetables',name:'redish',quality:500,price:2,gprice:3.01,img:'1.jpeg'},
  ]




  filteredData: any[] | undefined;
  // item :string | undefined;

  handleFilterClick(filterCriteria: string) {
    this.filteredData = this.category_ary.filter((item: { property: string; }) => item.property === filterCriteria);
  }

}

