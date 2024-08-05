import { Component, OnInit,HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
isactive:boolean=false
scrolling:boolean=false
prevScrollpos = 0
barraTransparente:boolean=true;
altura:number=0;
  constructor(@Inject(DOCUMENT) private document: Document) { }
  @HostListener('document:scroll', ['$event']) onScrollEvent($event:any){
    // console.log($event['Window']);
    var currentScrollPos = window.pageYOffset;
    console.log($event);
    
     if (this.prevScrollpos > currentScrollPos)
     {console.log('arriba')
       this.scrolling = false;}
     else 
     {
            
            console.log('abajo')
            this.scrolling=true
           

     }
     this.prevScrollpos = currentScrollPos;
   
     if (this.document.documentElement.scrollTop==0){
  
     this.barraTransparente=true;
    
     } else this.barraTransparente=false;
    
   }
  ngOnInit(): void {
  }
mievent(){
 this.isactive=true
}

}
