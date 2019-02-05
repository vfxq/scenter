import * as React from "react";
import { observer, inject } from "mobx-react";
import { IPopupStore } from "../../store/popupStore";

interface IProps {
  data: {
    id: string,
    title: string,
    video: string,
  };
  popupStore?: IPopupStore;
}

function VideoItem(props: IProps) {
  const { title, id } = props.data;
  const { openPopup } = props.popupStore;

  const handleClick = () => {
    return openPopup(props.data);
  };

  return (
    <>
      <div className="video__item-info" onClick={handleClick}>
        <div className="video__item-image">
          <img src={require(`./img/${id}-min.png`)}/>
        </div>
        <div className="video__item-title">
          {title}
        </div>
      </div>
    </>
  );
}

export default inject("popupStore")(observer(VideoItem));
