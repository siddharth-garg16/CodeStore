import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productsList:string[] = ["Monitors", "CPU", "GPU", "DDR4 RAM", "DDR5 RAM", "Hard Drives", "SSD", "CPU Coolers", "Custom PC build" , "Laptops", "Cables", "Motherboards","Accessories", "Gaming Consoles", "TVs", "Gaming gears", "Desks", "Gaming Chairs", "Keyboards", "Mechanical Keyboards", "Gaming Mouse", "Split-key keyboards", "PC Building toolkit", "Power supplies", "PC Cases", "PC repairs", "RGB accessories", "on-door repairs","PC upgrades", "PC maintainance", "customised personal setups", "Cameras"]

  arrivals:{imgPath:string, productName:string, productPrice:number}[]=[
    {
      imgPath:"",
      productName:"NVIDIA RTX 4090",
      productPrice: 249990
    },
    {
      imgPath:"",
      productName:"SONY WH-1000XM5",
      productPrice: 34990
    },
    {
      imgPath:"",
      productName:"RAZOR ISKUR",
      productPrice: 64990
    },
    {
      imgPath:"",
      productName:"NVIDIA RTX 4090",
      productPrice: 250000
    },
    {
      imgPath:"",
      productName:"NVIDIA RTX 4090",
      productPrice: 250000
    },
    {
      imgPath:"",
      productName:"NVIDIA RTX 4090",
      productPrice: 250000
    }
  ]
}
