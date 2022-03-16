import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sweet-cake',
  templateUrl: './sweet-cake.component.html',
  styleUrls: ['./sweet-cake.component.css']
})
export class SweetCakeComponent implements OnInit {
 
  cake:any={};

   cocoCake="https://media.istockphoto.com/photos/delicious-slice-of-cake-picture-id1327828405";
   vanilCake="https://media.istockphoto.com/photos/vanilla-sponge-cake-with-cream-and-white-chocolate-decorate-sliced-picture-id880443720?s=612x612";
   carrCake="https://media.istockphoto.com/photos/homemade-carrot-cake-picture-id961261550?s=612x612";
  
   constructor() {}

  ngOnInit(): void {
  }

  getCake(mycake:NgForm):void{
   this.cake=mycake;
    }
}
