import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {
  planetaryTemplate!: HTMLElement
  contentTemplate!: HTMLElement
  // title!: HTMLElement

  constructor(
    private eRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    // document.addEventListener('wheel', (e: WheelEvent) => this.handleWheelEvent(e), {passive: false})
  }

  ngAfterViewInit(){
    this.planetaryTemplate = this.eRef.nativeElement.querySelector('app-planetary-system')
    this.contentTemplate = this.eRef.nativeElement.querySelector('.content')
    // this.title = this.eRef.nativeElement.querySelector('h2')
    this.setContentCols();
  }

  @HostListener('window:resize')
  onResize(){
    this.setContentCols()
    this.handleScrollEvent()
  }

  @HostListener('document:scroll')
  handleScrollEvent(){

    if ( window.innerWidth < 900 ){
      this.renderer.setStyle( this.planetaryTemplate, 'position', 'static' )
      return;
    }
    
    let toTop = this.eRef.nativeElement.getBoundingClientRect().top

    let toBottom = this.eRef.nativeElement.getBoundingClientRect().bottom 

    let planetarySystemHeight = this.planetaryTemplate.offsetHeight;

    let maxMarginTop = this.contentTemplate.getBoundingClientRect().height
    let currentMarginTop = Number(this.planetaryTemplate.style.marginTop?.replace('px','')) + planetarySystemHeight
    if ( currentMarginTop >= maxMarginTop ) toTop = maxMarginTop - planetarySystemHeight;

    if (toTop <= 80 && toTop < 0 && toBottom > planetarySystemHeight+110){
      this.renderer.setStyle(this.planetaryTemplate, 'position', `fixed`)
      this.renderer.setStyle(this.planetaryTemplate, 'top', `110px`)
      this.renderer.setStyle(this.planetaryTemplate, 'align-self', 'start')
      // this.renderer.setStyle( this.title, 'position', 'fixed' )
      // this.renderer.setStyle(this.title, 'top', `0px`)
    }else {
      this.renderer.setStyle( this.planetaryTemplate, 'position', 'static' )
      // this.renderer.setStyle( this.title, 'position', 'absolute' )
      if ( toBottom < (planetarySystemHeight + 110) )
        // this.renderer.setStyle( this.title, 'bottom', `${planetarySystemHeight+60}px` )
        // this.renderer.setStyle( this.title, 'top', `initial` )
        this.renderer.setStyle(this.planetaryTemplate, 'align-self', 'end')
      // else{
        // this.renderer.setStyle( this.title, 'position', 'static' )
      // }
    }

  }

  
  setContentCols(){
    if ( window.innerWidth < 900 ){
      this.renderer.setStyle(this.contentTemplate, 'grid-template-columns', `auto`)
      return;
    }
    let planetarySystemWidth = this.planetaryTemplate.offsetWidth
    this.renderer.setStyle(this.contentTemplate, 'grid-template-columns', `1fr ${planetarySystemWidth}px`)
  }
  

}
