import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {

  constructor(
    private eRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    // document.addEventListener('wheel', (e: WheelEvent) => this.handleWheelEvent(e), {passive: false})
  }

  ngAfterViewInit(){
    // let aBlock = this.eRef.nativeElement.querySelector('.about-list > div')
    // this.renderer.addClass(aBlock, 'active')
  }

  // @HostListener('document:wheel', ['$event'])
  // handleWheelEvent(e: WheelEvent){
  //   let toTop = this.eRef.nativeElement.getBoundingClientRect().top
  //   if ( (toTop <= 80 && e.deltaY > 0) || (toTop - e.deltaY < 80 && e.deltaY > 0) ) 
  //     e.preventDefault()
  // }

  // scrollToAbout(){

  //   document.querySelector(`#about`)?.scrollIntoView({
  //     block: 'start'
  //   })
  // }
  

}
