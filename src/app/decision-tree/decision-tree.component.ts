import { Component, OnInit } from '@angular/core';
import { Input} from '@angular/core';
import {Decision} from '../decision/decision.service';

@Component({
  selector: 'decision-tree',
  templateUrl: './decision-tree.component.html',
  styleUrls: ['./decision-tree.component.scss'],
})
export class DecisionTreeComponent implements OnInit {

  @Input() decisions: Array<Decision>;
  @Input() switchy: string;

  constructor(){
    let getlist = this.switchy;
  }

  ngOnInit() {
  }

  ngOnChanges() {
    setTimeout(function () {
      var itemList = document.getElementsByClassName("scroll-content");
      console.log(itemList)
      if(itemList[0]) {
        itemList[0].scrollTop = itemList[0].scrollHeight;
      }
    }, 10);
  }

}
