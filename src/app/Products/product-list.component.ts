import { Component } from '@angular/core';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  pageTitle: string = 'My Product list is so ';
  // productExist: boolean = true;
  products: any[] = [
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2019",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2019",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "s tarRating": 4.8,
      "imageUrl": "assets/images/hammer.png"
    }
  ];



  constructor() {

    // if( this.products == null || this.products == undefined || this.products.length  == 0){
    //   this.productExist = false;
    // }else{
    //   this.productExist = true;
    // };

  }

  doesProductsExist(): boolean {
    if (this.products == null || this.products == undefined || this.products.length == 0) {
      return false;
    } else {
      return true;
    }
  }

  isListgreaterThanZero(): boolean {
    if (this.products == null || this.products == undefined) {
      return false;
    }

    if (this.products.length < 0) {
      return true;
    } else {
      return false;

    }
  }

  doesTitlecontainsX(): boolean {
    // if title has X return true
    if (this.pageTitle.includes("X")) {
      return true;
    } else {
      return false;
    }

  }

  doesTitlelengthMoreThan22(): boolean {
    // if(this.pageTitle == null){
    //   return false;
    // };

    // if (this.pageTitle == undefined){
    //   return false;
    // };
    // if (this.pageTitle == ''){
    //   return false;
    // };

    if (this.pageTitle == null || this.pageTitle == undefined || this.pageTitle == '') {
      return false;
    } else {

      if (this.pageTitle.length > 22) {
        return true;
      } else {
        return false;
      }

    }
  }










}