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
      imgPath:"https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/09/geforce-rtx-4090-product-photo-002.webp?fit=1200%2C675&ssl=1",
      productName:"NVIDIA RTX 4090",
      productPrice: 249990
    },
    {
      imgPath:"https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Untitled4475.png",
      productName:"SONY WH-1000XM5",
      productPrice: 34990
    },
    {
      imgPath:"https://compumise.in/wp-content/uploads/2022/07/https___hybrismediaprod.blob_.core_.windows.net_sys-master-phoenix-images-container_h55_he9_9184349421598_iskur-x-gallery-1500x1000-06.jpg",
      productName:"RAZOR ISKUR",
      productPrice: 64990
    }
  ]
}
