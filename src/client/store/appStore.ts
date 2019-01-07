import { observable, action, IAction } from 'mobx';

class AppStore {
  @observable width:number = document.documentElement.scrollWidth;

  @action.bound
  public setWidth(width?: number ):void{
    this.width = width; 
  };
}

export type TAppStore = {
  width: number,
  setWidth: any
}

const appStore = new AppStore();
export default appStore;