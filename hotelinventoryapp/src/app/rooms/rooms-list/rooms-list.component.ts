import { Component,Input,OnInit,Output,EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChange } from '@angular/core';
import { RoomList } from '../rooms';
@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  // any event will cause the entire change detection
  // onPush change friction strategy can be only applied in case i am not modify data internally in the component
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit{
  
  // rooms ประกาศไว้เพื่อที่จะมารับ prop จาก parent
  @Input() rooms: RoomList[] = []
  // now we're created roomSelected so we will click on this room then information will passes to parent
  // <RoomList> this tell what kind of data we want to send
  @Output() selectedRoom = new EventEmitter<RoomList>();
  ngOnInit(): void{}
  selectRoom(room: RoomList){
    // this room is selected we want to emit this data back to parent
    // selectedRoom.emit() will give data back to parent
    this.selectedRoom.emit(room)
  }
}
