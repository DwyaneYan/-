import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class CartService {
  items=[];  //用来把当前商品的列表（数组）存储在购物车中

  addToCart(product) {
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items=[];
    return this.items;
  }


}