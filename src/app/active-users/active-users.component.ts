import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];
  @Output() userSetToInactive = new EventEmitter<number>();
  constructor(private UserService: UserService) {

  }
  //onSetToInactive(id: number) {
  //  this.userSetToInactive.emit(id);
  //}
   onSetToInactive(id: number) {
     this.UserService.onSetToInactive(id);
  }
}
