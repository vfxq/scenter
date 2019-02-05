import * as React from "react";
import { observer, inject } from "mobx-react";
import YouTube from "react-youtube";
import "./styles/style.scss";

@inject("popupStore")
@observer
export class Popup extends React.Component<any, any> {
  public render() {
    const { data, closePopup } = this.props.popupStore;
    if (!data) {
      return null;
    }

    return (
      <div className="popup" onClick={closePopup}>
        <div className="popup__container">
          <div className="popup__header">
            <div className="popup__title">
              <h4>{data.title}</h4>
            </div>
            <div className="popupHelpItem__close" onClick={closePopup}>
              close
            </div>
          </div>
              <div className="popupHelpItem__content">
                <YouTube videoId={data.video}
                  className={"popup__youtube"}
                />
              </div>
            </div>
          </div>
    );
  }
}
