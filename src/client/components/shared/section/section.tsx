import * as React from "react";
import * as css from "./styles/style.scss";

interface IProps {
  id?: string;
  bgImage?: string | any;
  height?: number;
  style?: any;
}

export class Section extends React.Component<IProps, {}> {
  public render() {
    const { bgImage, height, id, children } = this.props;
    const bg = bgImage ? {backgroundImage: `url(${bgImage})`} : null;
    const styles = {
      height: height || "auto",
    };

    return (
      <section className="section" style={ { ...styles, ...css, ...bg } } id={id}>
        <div className="content">
          {children}
        </div>
      </section>
    );
  }
}
