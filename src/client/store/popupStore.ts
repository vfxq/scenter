import { action, observable } from "mobx";

class PopupStore {
  @observable public data: IVideo | boolean = false;

  @action.bound
  public openPopup = (options: IVideo) => {
    this.data = options;
  }

  @action.bound
  public closePopup = () => {
    this.data = false;
  }
}

export interface IPopupStore {
  data: IVideo | boolean;
  openPopup(options?: IVideo): void;
  closePopup(): void;
}

interface IVideo {
  id: string;
  title: string;
  video: string;
}

const popupStore = new PopupStore();
export default popupStore;
