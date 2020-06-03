import { Component, DoCheck, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,DoCheck  {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    access_token:string;
    userName:string;
  constructor(private breakpointObserver: BreakpointObserver,private route:Router) {
    this.access_token=environment.access_token;
    this.userName=environment.userName;
  }
  ngOnInit(): void {
  }
  ngDoCheck(): void {
    this.access_token=environment.access_token;
    this.userName=environment.userName;
  }
  logout(){
    environment.access_token='';
    environment.userName='';
    this.route.navigate(['/Login']);
  }
}
