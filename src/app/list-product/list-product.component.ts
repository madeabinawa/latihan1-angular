import { Component, OnInit } from "@angular/core";
import { catalogProduct } from "../product";

@Component({
  selector: "app-list-product",
  templateUrl: "./list-product.component.html",
  styleUrls: ["./list-product.component.css"]
})
export class ListProductComponent implements OnInit {
  catProduct = catalogProduct;
  constructor() {}

  ngOnInit() {}

  keranjang() {
    window.alert("Produk ini telah masuk ke dalam Cart");
  }
}
