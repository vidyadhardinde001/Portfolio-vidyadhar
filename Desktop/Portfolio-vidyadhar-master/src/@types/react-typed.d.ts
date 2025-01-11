declare module 'react-typed' {
    import * as React from 'react';
  
    export interface TypedProps {
      strings: string[];
      typeSpeed?: number;
      backSpeed?: number;
      loop?: boolean;
      // Add other props as needed
    }
  
    export class Typed extends React.Component<TypedProps> {}
    export default Typed;
  }
  