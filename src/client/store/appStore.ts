import { action, observable } from "mobx";
import { requestData } from "./utils";

class AppStore {
  @observable public width: number = 0;
  @observable public menu: IMenu | undefined;

  @action.bound
  public getMenu = (): void => {
    const data = requestData("/api/menu");
    data.then((json) => {
      if (json  && json.hasOwnProperty("menuItems") &&  json.menuItems.length > 0 ) {
        this.menu = json;
      }
    });
  }
}

export interface IMenuItem {
  title: string;
  link: string;
  map: any;
}

export interface IMenu {
  [index: number]: object;
  menuItems: IMenuItem[];
  MenuItem: Element;
  length: number;
}

export interface IAppStore {
  width: number;
  menu: IMenu;
  getMenu(): void;
}

const appStore = new AppStore();
export default appStore;
