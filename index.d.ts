declare module '*.svg' {
  const value: React.StatelessComponent<React.SVGAttributes<SVGElement>>;
  export default value;
}

declare module '*.jpg' {
  const value: any;
  export default any;
}

declare module '*.png' {
  const value: any;
  export default any;
}

declare module '*.scss' {
  const content: {[className: string]: string};
  export default content;
}
