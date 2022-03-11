import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',]
})
export class AppComponent {

  title = 'neoTask';

  titlelist = [
     {
      title: 'Neo',
      list : [
        {
          id: 1,
          title: 'Neo',
          img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60',
          note: 'Lorem ipsum dolor sit amet consectetur fer adipisicing elit.',
        },
      ],},
      {
      title: 'INeo',
      list : [
        {
          id: 1,
          title: 'INeo',
          img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60',
          note: 'Lorem ipsum dolor sit amet consectetur fer adipisicing elit.',
        },
        {
          id: 2,
          title: 'INeo',
          img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60',
          note: 'Lorem ipsum dolor sit amet consectetur fer adipisicing elit..',
        }
      ]},
      {
      title: 'IAmNeo',
      list : [
        {
          id: 1,
          title: 'IAmNeo',
          img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60',
          note: 'Lorem ipsum dolor sit amet consectetur fer adipisicing elit.',
        },
        {
          id: 2,
          title: 'IAmNeo',
          img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60',
          note: 'Lorem ipsum dolor sit amet consectetur fer adipisicing elit..',
        },
        {
          id: 3,
          title: 'IAmNeo',
          img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60',
          note: 'Lorem ipsum dolor sit amet consectetur fer adipisicing elit.',
        }
      ],
    },
  ]

  dropColumns(event: CdkDragDrop<any>) {
    moveItemInArray(this.titlelist, event.previousIndex, event.currentIndex);
  }

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

}
