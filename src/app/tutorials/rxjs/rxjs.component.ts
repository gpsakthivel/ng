import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { Observable, from, fromEvent, of } from 'rxjs'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {
  // observable
  agents!: Observable<string>
  agentName!: String

  // of operator
  // array
  studentList = ['Mark', 'Ram', 'Sita', 'Lisa']
  students: Observable<string[]> = of(this.studentList)
  // string
  studentNames: Observable<string> = of('Ram')
  // object
  studentObj = {
    id: 10,
    name: 'Ram',
  }
  student$: Observable<any> = of(this.studentObj)

  // from operator
  ordersArr = ['Fashion', 'Electronics', 'Mobile', 'Household']
  order$: Observable<string> = from(this.ordersArr)
  orderName!: string

  // fromEvent operator
  @ViewChild('validateBtn') validateBtn!: ElementRef

  constructor() {}

  ngOnInit(): void {
    // observable
    //   this.agents = new Observable(
    //     function(observer) {
    //       try{
    //         observer.next('Ram');
    //         setInterval(()=>{
    //           observer.next('Mark');
    //         }, 3000);
    //         setInterval(()=>{
    //           observer.next('Sita');
    //         }, 6000);
    //       }
    //       catch(e){
    //         observer.error(e);
    //       }
    //     }
    //   );
    //   this.agents.subscribe(data => {
    //     console.log(data);
    //     this.agentName = data;
    //   })
    // of operator
    // array
    // this.students.subscribe((data) => {
    //   console.log(data);
    // })
    // string
    // this.studentNames.subscribe((data) => {
    //   console.log(data);
    // })
    // object
    // this.student$.subscribe((data) => {
    //   console.log(data);
    // })
    // from operator
    // this.order$.subscribe(data => {
    //   console.log(data);
    //   setInterval(() => {
    //     this.orderName = data;
    //   }, 3000);
    // })
    // of vs from operator
    // of - returns an array
    // from - return the string in the array
  }

  // fromEvent operator
  rxjsEventObservable() {
    const btnObservable$ = fromEvent(
      this.validateBtn?.nativeElement,

      'click'
    )
    btnObservable$.subscribe((data) => {
      console.log(data)
    })
  }
}
