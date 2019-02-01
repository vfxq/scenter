import * as React from "react";

interface IProps {
  data: {
    id: string,
    title: string,
    extended: string,
  };
}

export function CarouselItem(props: IProps) {
  console.log("-----", props.data);
  const { id, title } = props.data;
  return (
    <>
      <img src={require(`./img/${id}-min.png`)}/>
      <p className="legend">{title}</p>
    </>
  )
}