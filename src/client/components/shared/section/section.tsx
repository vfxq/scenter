import * as React from "react";
import * as css from "./styles/style.scss";

interface IProps {
  id?: string;
  bgImage?: string | any;
  style?: any;
}

export class Section extends React.Component<IProps, {}> {
  public render() {
    const { bgImage, id, children } = this.props;
    const bg = bgImage ? {backgroundImage: `url(${bgImage})`} : null;

    return (
      <section className="section" style={ { ...css, ...bg } } id={id}>
        <div className="content">
          {children}
        </div>
      </section>
    );
  }
}
