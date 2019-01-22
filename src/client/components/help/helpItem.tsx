import * as React from 'react';

interface IProps{
  data: {
    id: string,
    title: string,
    extended: string
  }
}

class HelpItem extends React.Component<IProps, any>{
  constructor(props:IProps) {
    super(props);
    this.state = {
      show: false
    };
  }

  public togglePopup = () => {
    this.setState((state:any) => (
      {show: !state.show}
    ));
  }

 

  public popup = () => {
    return (
      <div className="popupHelpItem">
        <div className="popupHelpItem__bground" onClick={this.togglePopup}>
          
        </div>
        <div className="popupHelpItem__container">
          <div className="popupHelpItem__close" onClick={this.togglePopup}>
            close
          </div>
          <div>
            <div className="popupHelpItem__content">
            <h4>{this.props.data.title}</h4>
            {this.props.data.extended}
            </div>
          </div>
        </div>
      </div>
    );
  }

  render(){
    const {id, title} = this.props.data;
    const popup = this.state.show ? this.popup() : null;

    return (
      <>
        <div onClick={this.togglePopup}>
        
          <img src={require(`./img/${id}-min.png`)}/>
          <p>
            {title}
          </p>
        </div>
        {popup}
      </>
    )
  }
}

export default HelpItem;