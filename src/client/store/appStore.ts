import { observable, action } from "mobx";

class AppStore {
  @observable width: number = 0;
  @observable menu: IMenu | undefined;

  @action.bound
  getMenu = (): void => {
    fetch("/api/menu")
      .then((res: Response) => {
        if (res.status !== 200) {
          console.error("Looks like there was a problem. Status Code: " + res.status);  
          return;
        }
        res.json().then(json => {
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

export type TMenuItem = {
  title: string,
  link: string,
  map: any,
};

export interface IMenu {
  [index: number]: object;
  menuItems: TMenuItem[];
  MenuItem: Element;
  length: number;
};

export type TAppStore = {
  width: number;
  menu: IMenu;
  getMenu(): void;
};

const appStore = new AppStore();
export default appStore;
