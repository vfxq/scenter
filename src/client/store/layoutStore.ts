import { action, observable } from "mobx";

class LayoutStore {
  @observable public width: number = document.documentElement.scrollWidth;
  @observable public scrolled: boolean = false;

  @action.bound
  public setWidth(width?: number): void {
    this.width = width;
  }

  @action.bound
  public setScrolled(scrollPosition?: boolean ): void {
    this.scrolled = scrollPosition;
  }
}

export type TLayoutStore = {
  width: number;
  setWidth(width?: number): void;
  scrolled: boolean;
  setScrolled(scrollPosition: boolean): void;
};

const layoutStore = new LayoutStore();
export default layoutStore;
