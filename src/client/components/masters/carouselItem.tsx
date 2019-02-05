
import * as React from "react";
import YouTube from "react-youtube";

interface IProps {
  data: {
    id: string,
    title: string,
    video?: string,
  };
}

export function CarouselItem(props: IProps) {
  const [show, setShow] = React.useState(false);

  const togglePopup = () => {
    setShow(!show);
  };

  const opts = {
    height: "360",
    width: "640",
  };

  const popUpBody = () => {
    return (
      <div className="popupHelpItem">
        <div className="popupHelpItem__bground" onClick={togglePopup}>
          <div className="popupHelpItem__container">
            <div className="popupHelpItem__close" onClick={togglePopup}>
              close
            </div>
            <div>
              <div className="popupHelpItem__content">
                <h4>{props.data.title}</h4>
                <YouTube
                  videoId={props.data.video}
                  opts={opts}
                  // onReady={this._onReady}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const { title, id } = props.data;
  const popup = show ? popUpBody() : null;
  return (
    <>
      <div onClick={togglePopup}>
        <img src={require(`./img/${id}-min.png`)}/>
        <p>
          {title}
        </p>
      </div>
      {popup}
    </>
  );
}

// import * as React from "react";

// interface IProps {
//   data: {
//     id: string,
//     title: string,
//     extended: string,
//   };
// }

// export function CarouselItem(props: IProps) {
//   const { id, title } = props.data;
//   return (
//     <>
//       <img src={require(`./img/${id}-min.png`)}/>
//       <p className="test">{title}</p>
//     </>
//   );
// }
