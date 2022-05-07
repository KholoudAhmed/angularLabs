import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../Shared Classes and types/DiscountOffers';
import { IProduct } from '../Shared Classes and types/IProduct';
import { ICategory } from '../Shared Classes and types/ICategory';
import { ProductServiceService } from 'src/services/product-service.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  // constructor(private productService:ProductServiceService){}

  storeName:string=" store of covers";
  imageSrc = 'assets/cover.png'  
  imageAlt = 'image'
  // storeLogo:string;
  storeLogo:string = "";
  Discount:DiscountOffers=DiscountOffers.secondOne;
  discount:any="No Discount";
  ProductList:IProduct[]=[
    {ID:1, 
      Name:"bag",
      Quantity:1,
      Price:100,
      Img:"img"},
      {ID:2, 
        Name:"bag",
        Quantity:1,
        Price:100,
        Img:"img"}
  ];
  CategoryList:ICategory[]=[
    {ID:1, Name:"firstCatgory"},
    {ID:2,Name:"secondCatgory"},
    {ID:3,Name:"thirdCatogry"}  
  ];
  selected = "----";
  update(e:any){
    this.selected = e.target.value
  }
  ClientName:string="";
  nameOfClient="kholoud ahmed";
  IsPurshased:boolean=false;
  constructor(private productService:ProductServiceService) { }
  flag:boolean=false;
  renderValue(){
    console.log(this.nameOfClient);
    console.log(this.ProductList);
    this.ProductList=this.productService.GetAllProducts();
    console.log(this.ProductList);
    console.log("before render" + this.flag);
    
    this.flag=!this.flag;
    console.log("after render" + this.flag);
    
  }
  // items = [
  //   {"name": "item 1", "price":"100" , "Quantity":"100"},
  //   {"name": "item 2", "price":"200" ,"Quantity":"300"},
  //   {"name": "item 3", "price":"300" , "Quantity":"400"},

  // ]

  buttontnClicked(){
    console.log("before button" + this.flag);
    this.flag = !this.flag;
    console.log("after button" + this.flag);
    console.log("button pressed");
    
  }
  

  ngOnInit(): void {
  }

}
