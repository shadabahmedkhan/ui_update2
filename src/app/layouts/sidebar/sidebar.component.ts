import {Component, OnInit} from "@angular/core";
import {EventsService} from "../../services/events-service";
import {ProfileManager} from "../../services/profile-manager";
import {HttpService} from "../../services/http-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private http: HttpService,private events:EventsService, private router: Router, private profileManager:ProfileManager) { }

  ngOnInit() {

  }

  get userName(){
    return this.profileManager.profile ? this.profileManager.profile.firstName +' '+this.profileManager.profile.lastName : '';
  }
  get avatar(){
    return this.profileManager.profile ?   this.profileManager.profile.avatarUrl : '';
  }

  get allowed():Boolean{
    return (this.profileManager.profile.roles && (this.profileManager.profile.roles instanceof Array) && this.profileManager.profile.roles.indexOf('Admin')>-1)
  }


}
