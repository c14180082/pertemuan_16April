import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})


export class AppComponent  { // bentui nya json
  name = 'Ivana'; // variable dengan nama "name"

  item = {
    nama: "Buah Kelengkeng",
    harga : 10000
  }

  items = [
    {
      nama: "Buah Jeruk",
      harga: 15000
    },
    {
      nama: "Buah Appel",
      harga: 5000
    }
  ]

  // Arry tidak harus bentuk json
  itemArr= [1,2,3,4];
}
