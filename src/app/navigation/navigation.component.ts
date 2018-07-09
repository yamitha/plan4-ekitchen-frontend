import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  user;

  constructor(
    private af: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.user = this.userService.getUser();
  }

  ngOnInit() {
  }
  menu() {
    // Sending Message
    let stringy = '';
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1; // Jan is 0

    const yyyy = today.getFullYear();

    if (dd < 10) {
      const newDD = '0' + dd.toString();
    }

    if (mm < 10) {
      const newMM = '0' + mm.toString();
    }

    const formattedDate = dd + '/' + mm + '/' + yyyy;

    stringy = stringy + '_' + formattedDate + '_' + '\r\n'
    stringy = stringy + 'Hi,' + ' can you send me the menu.im at vault 07 right now ' + '\r\n';

    // console.log(stringy);

    const whatsappMessage = (<any>window).encodeURIComponent(stringy);

    const url = 'https://api.whatsapp.com/send?phone=94754009021' + '&text=' + whatsappMessage;

    this.router.navigate(['/events']);

    window.open(url);
  }
}
