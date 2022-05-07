import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/Shared Classes and types/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  ProductList:IProduct[]=[];
  constructor() { 
    this.ProductList=[
      
       {ID:1, Name:"product1",Quantity:133,Price:100,Img:"img"},
       {ID:2,Name:"product2",Quantity:13,Price:100,Img:"img"},
       {ID:3,Name:"product3",Quantity:33,Price:200,Img:"img"}
    ];
  }

  GetAllProducts(){
    return this.ProductList;
  }
  GetProductById(prdId:any){
    if(typeof prdId !== "number") return null;
    return this.ProductList.find(item=> item.ID === prdId)??null;
  }
}
