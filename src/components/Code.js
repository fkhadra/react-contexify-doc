import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

export const Playground = ({ children, ...props }) => (
  <LiveProvider code={children}>
    <LiveEditor />
    <LiveError />
    <LivePreview />
  </LiveProvider>
);


class Static extends React.Component {
  componentDidMount(){
    Prism.highlightAll();
  }

  render() {
    return (
      <pre>
        <code className="language-js">
          {this.props.children}
        </code>
      </pre>
    )
  }
}

export { Static }