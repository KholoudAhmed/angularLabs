import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ProductServiceService } from 'src/services/product-service.service';
import {ProductsComponent} from './products/products.component';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  
  @ViewChild(ProductsComponent)products:ProductsComponent=new ProductsComponent(new ProductServiceService());
  midFun(){
    return this.products.renderValue();
    
  }
  title = 'lab1';
}
// ********************************display data***********************************
