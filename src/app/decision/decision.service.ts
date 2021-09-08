import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Decision {
  title: string;
  nodes: Array<any> = [];
  expanded:boolean;
  grabnodes: any;
  savename: string;
  savename_noq: string;
  info: any;
  constructor(getnode: any) {
      this.title = getnode.title;
      this.savename = getnode.title.replace(/ /g,'');
      this.expanded = false;
      this.info = getnode.info;
      if(getnode.nodes != null) {
        getnode.nodes.forEach((x) => {
          this.nodes.push(new Decision(x));
        });
      }
  }
  toggle() {
      this.expanded = !this.expanded;
      console.log(this.expanded);
  }
}
