import { action, observable } from "mobx";

class AppStore {
  @observable public width: number = 0;
  @observable public menu: IMenu | undefined;

  @action.bound
  public getMenu = (): void => {
    fetch("/api/menu")
      .then((res: Response) => {
        if (res.status !== 200) {
          console.error("Looks like there was a problem. Status Code: " + res.status);
          return;
        }
        res.json().then((json) => {
          if (json) {
            this.menu = json;
          }
        });
      })
      .catch((err: Error) => {
        console.error("Getting data from .. failed");
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
