import { observable, action } from 'mobx';

class LayoutStore {
  @observable width:number = document.documentElement.scrollWidth;

  @action.bound
  public setWidth(width?: number ):void{
    this.width = width; 
  };
}

export type TLayoutStore = {
  width: number;
  setWidth: any;
};

const layoutStore = new LayoutStore();
export default layoutStore;
