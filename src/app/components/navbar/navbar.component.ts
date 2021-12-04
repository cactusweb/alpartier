import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  sub: Subscription

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.sub = this.activatedRoute.fragment
      .subscribe( res => {
        if (res)
          this.scrollTo(res)
      })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.sub?.unsubscribe();
  }


  scrollTo(blockId: string){
    document.querySelector(`#${blockId}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

}
