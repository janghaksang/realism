import React from 'react';
import Recoil from 'recoil';
import Realism from 'realism';
import classnames from 'classnames';

import './Diagram.css';

import useViewRect from 'hooks/useViewRect';
import Editor from 'components/Editor';

export default function Diagram() {
  const ref = React.useRef();
  const rect = useViewRect(ref);

  return (
    <div
      {...{
        className:classnames('Diagram'),
      }}
      >
      <div
        {...{
          className:classnames('Text-Editor'),
        }}
        >
        <Editor/>
      </div>
      <div
        {...{
          className:classnames('Diagram-Editor'),
        }}
        >
        <div
          {...{
            ref,
            className:classnames('Diagram-Editor-Content'),
          }}
          >
          <canvas
            {...{
              width:rect.width,
              height:rect.height,
              style:rect,
            }}
            />
        </div>
      </div>
    </div>
  );
}
