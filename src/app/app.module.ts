import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "./material/material.module";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ListProductComponent } from "./list-product/list-product.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: "list-product", component: ListProductComponent },
      { path: "about-us", component: AboutUsComponent },
      { path: "contact-us", component: ContactUsComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ListProductComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
