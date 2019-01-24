import * as React from 'react';

interface IProps{
  data: {
    id: string,
    title: string,
    extended: string
  }
}

export default function HelpItem(props: IProps){
  const [show, setShow] = React.useState(false);

  const togglePopup = () => {
    setShow(!show)
  }
  
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
                {props.data.extended}
              </div>
            </div>
          </div>
        </div>
      </div>
  )};

  const { title, id } = props.data;
  
  const popup = show ? popUpBody() : null;
  return(
    <>
      <div onClick={togglePopup}>
        <img src={require(`./img/${id}-min.png`)}/>
        <p>
          {title}
        </p>
      </div>
      {popup}   
    </>
  )
}