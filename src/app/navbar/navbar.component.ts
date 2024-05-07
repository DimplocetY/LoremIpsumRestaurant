import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    window.addEventListener('scroll', (event) => {
      let scroll = window.scrollY;
      if (scroll > 10) {
        document.querySelector('.navbar')?.classList.add('shadow');
      } else {
        document.querySelector('.navbar')?.classList.remove('shadow');
      }
    });
  }
  toggleNav() {
    let nav = document.getElementById('navigation');
    nav?.classList.toggle('show');
  }
}
