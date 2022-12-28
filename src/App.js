import React from 'react';
import Recoil from 'recoil';
import Realism from 'realism';
import classnames from 'classnames';

import './App.css';

import Login from 'components/Login';
import Diagram from 'components/Diagram';

import Websocket from 'modules/Websocket';
import Theme from 'modules/Theme';

import useWindowResize from 'hooks/useWindowResize';

Realism.use(['app']);
export default function App() {
  const app = Realism.useModel('app',false);
  const onLogined = React.useCallback((data)=>{
    app.setValues(data);
  },[]);
  useWindowResize();

  return (
    <div
      {...{
        className:classnames('App'),
      }}
      >
      {!app.values&&(
        <Login
          {...{
            onLogined,
          }}
          />
      )}
      {app.values&&(<Diagram/>)}
      {app.values&&(<Websocket {...{url:app.ws_url.value}}/>)}
      <Theme
        {...{
          default:{
            'theme-palette-primary-background-color':'#ffffff',
            'theme-palette-primary-foreground-color':'#000000',
            'theme-palette-primary-background-color-highlight':'#ffffff',
            'theme-palette-primary-foreground-color-highlight':'#000000',
            'theme-palette-primary-background-color-selected':'#ffffff',
            'theme-palette-primary-foreground-color-selected':'#000000',
            'theme-palette-primary-background-color-active':'#ffffff',
            'theme-palette-primary-foreground-color-active':'#000000',
            'theme-palette-secondary-background-color':'#ffffff',
            'theme-palette-secondary-foreground-color':'#000000',
            'theme-palette-secondary-background-color-highlight':'#ffffff',
            'theme-palette-secondary-foreground-color-highlight':'#000000',
            'theme-palette-secondary-background-color-selected':'#ffffff',
            'theme-palette-secondary-foreground-color-selected':'#000000',
            'theme-palette-secondary-background-color-active':'#ffffff',
            'theme-palette-secondary-foreground-color-active':'#000000',
            'theme-palette-tertiary-background-color':'#ffffff',
            'theme-palette-tertiary-foreground-color':'#000000',
            'theme-palette-tertiary-background-color-highlight':'#ffffff',
            'theme-palette-tertiary-foreground-color-highlight':'#000000',
            'theme-palette-tertiary-background-color-selected':'#ffffff',
            'theme-palette-tertiary-foreground-color-selected':'#000000',
            'theme-palette-tertiary-background-color-active':'#ffffff',
            'theme-palette-tertiary-foreground-color-active':'#000000',
            'theme-palette-quadrary-background-color':'#ffffff',
            'theme-palette-quadrary-foreground-color':'#000000',
            'theme-palette-quadrary-background-color-highlight':'#ffffff',
            'theme-palette-quadrary-foreground-color-highlight':'#000000',
            'theme-palette-quadrary-background-color-selected':'#ffffff',
            'theme-palette-quadrary-foreground-color-selected':'#000000',
            'theme-palette-quadrary-background-color-active':'#ffffff',
            'theme-palette-quadrary-foreground-color-active':'#000000',
            'theme-palette-error-background-color':'#ffffff',
            'theme-palette-error-foreground-color':'#000000',
            'theme-palette-error-background-color-highlight':'#ffffff',
            'theme-palette-error-foreground-color-highlight':'#000000',
            'theme-palette-error-background-color-selected':'#ffffff',
            'theme-palette-error-foreground-color-selected':'#000000',
            'theme-palette-error-background-color-active':'#ffffff',
            'theme-palette-error-foreground-color-active':'#000000',
            'theme-palette-warning-background-color':'#ffffff',
            'theme-palette-warning-foreground-color':'#000000',
            'theme-palette-warning-background-color-highlight':'#ffffff',
            'theme-palette-warning-foreground-color-highlight':'#000000',
            'theme-palette-warning-background-color-selected':'#ffffff',
            'theme-palette-warning-foreground-color-selected':'#000000',
            'theme-palette-warning-background-color-active':'#ffffff',
            'theme-palette-warning-foreground-color-active':'#000000',
            'theme-palette-info-background-color':'#ffffff',
            'theme-palette-info-foreground-color':'#000000',
            'theme-palette-info-background-color-highlight':'#ffffff',
            'theme-palette-info-foreground-color-highlight':'#000000',
            'theme-palette-info-background-color-selected':'#ffffff',
            'theme-palette-info-foreground-color-selected':'#000000',
            'theme-palette-info-background-color-active':'#ffffff',
            'theme-palette-info-foreground-color-active':'#000000',
            'theme-palette-success-background-color':'#ffffff',
            'theme-palette-success-foreground-color':'#000000',
            'theme-palette-success-background-color-highlight':'#ffffff',
            'theme-palette-success-foreground-color-highlight':'#000000',
            'theme-palette-success-background-color-selected':'#ffffff',
            'theme-palette-success-foreground-color-selected':'#000000',
            'theme-palette-success-background-color-active':'#ffffff',
            'theme-palette-success-foreground-color-active':'#000000',
            'theme-palette-disabled-background-color':'#ffffff',
            'theme-palette-disabled-foreground-color':'#000000',

            'theme-typography-h1-font-family':'Arial',
            'theme-typography-h1-font-size':'13.3333px',
            'theme-typography-h1-font-stretch':'100%',
            'theme-typography-h1-font-weight':400,
            'theme-typography-h1-font-style':'normal',
            'theme-typography-h1-font-variant-caps':'normal',
            'theme-typography-h1-font-variant-east-asian':'normal',
            'theme-typography-h1-font-variant-ligatures':'normal',
            'theme-typography-h1-font-variant-numeric':'normal',
            'theme-typography-h1-letter-spacing':'normal',
            'theme-typography-h1-line-height':'normal',
            'theme-typography-h1-word-spacing':'normal',

            'theme-typography-h2-font-family':'Arial',
            'theme-typography-h2-font-size':'13.3333px',
            'theme-typography-h2-font-stretch':'100%',
            'theme-typography-h2-font-weight':400,
            'theme-typography-h2-font-style':'normal',
            'theme-typography-h2-font-variant-caps':'normal',
            'theme-typography-h2-font-variant-east-asian':'normal',
            'theme-typography-h2-font-variant-ligatures':'normal',
            'theme-typography-h2-font-variant-numeric':'normal',
            'theme-typography-h2-letter-spacing':'normal',
            'theme-typography-h2-line-height':'normal',
            'theme-typography-h2-word-spacing':'normal',

            'theme-typography-h3-font-family':'Arial',
            'theme-typography-h3-font-size':'13.3333px',
            'theme-typography-h3-font-stretch':'100%',
            'theme-typography-h3-font-weight':400,
            'theme-typography-h3-font-style':'normal',
            'theme-typography-h3-font-variant-caps':'normal',
            'theme-typography-h3-font-variant-east-asian':'normal',
            'theme-typography-h3-font-variant-ligatures':'normal',
            'theme-typography-h3-font-variant-numeric':'normal',
            'theme-typography-h3-letter-spacing':'normal',
            'theme-typography-h3-line-height':'normal',
            'theme-typography-h3-word-spacing':'normal',

            'theme-typography-h4-font-family':'Arial',
            'theme-typography-h4-font-size':'13.3333px',
            'theme-typography-h4-font-stretch':'100%',
            'theme-typography-h4-font-weight':400,
            'theme-typography-h4-font-style':'normal',
            'theme-typography-h4-font-variant-caps':'normal',
            'theme-typography-h4-font-variant-east-asian':'normal',
            'theme-typography-h4-font-variant-ligatures':'normal',
            'theme-typography-h4-font-variant-numeric':'normal',
            'theme-typography-h4-letter-spacing':'normal',
            'theme-typography-h4-line-height':'normal',
            'theme-typography-h4-word-spacing':'normal',

            'theme-typography-h5-font-family':'Arial',
            'theme-typography-h5-font-size':'13.3333px',
            'theme-typography-h5-font-stretch':'100%',
            'theme-typography-h5-font-weight':400,
            'theme-typography-h5-font-style':'normal',
            'theme-typography-h5-font-variant-caps':'normal',
            'theme-typography-h5-font-variant-east-asian':'normal',
            'theme-typography-h5-font-variant-ligatures':'normal',
            'theme-typography-h5-font-variant-numeric':'normal',
            'theme-typography-h5-letter-spacing':'normal',
            'theme-typography-h5-line-height':'normal',
            'theme-typography-h5-word-spacing':'normal',

            'theme-typography-h6-font-family':'Arial',
            'theme-typography-h6-font-size':'13.3333px',
            'theme-typography-h6-font-stretch':'100%',
            'theme-typography-h6-font-weight':400,
            'theme-typography-h6-font-style':'normal',
            'theme-typography-h6-font-variant-caps':'normal',
            'theme-typography-h6-font-variant-east-asian':'normal',
            'theme-typography-h6-font-variant-ligatures':'normal',
            'theme-typography-h6-font-variant-numeric':'normal',
            'theme-typography-h6-letter-spacing':'normal',
            'theme-typography-h6-line-height':'normal',
            'theme-typography-h6-word-spacing':'normal',

            'theme-typography-subtitle1-font-family':'Arial',
            'theme-typography-subtitle1-font-size':'13.3333px',
            'theme-typography-subtitle1-font-stretch':'100%',
            'theme-typography-subtitle1-font-weight':400,
            'theme-typography-subtitle1-font-style':'normal',
            'theme-typography-subtitle1-font-variant-caps':'normal',
            'theme-typography-subtitle1-font-variant-east-asian':'normal',
            'theme-typography-subtitle1-font-variant-ligatures':'normal',
            'theme-typography-subtitle1-font-variant-numeric':'normal',
            'theme-typography-subtitle1-letter-spacing':'normal',
            'theme-typography-subtitle1-line-height':'normal',
            'theme-typography-subtitle1-word-spacing':'normal',

            'theme-typography-subtitle2-font-family':'Arial',
            'theme-typography-subtitle2-font-size':'13.3333px',
            'theme-typography-subtitle2-font-stretch':'100%',
            'theme-typography-subtitle2-font-weight':400,
            'theme-typography-subtitle2-font-style':'normal',
            'theme-typography-subtitle2-font-variant-caps':'normal',
            'theme-typography-subtitle2-font-variant-east-asian':'normal',
            'theme-typography-subtitle2-font-variant-ligatures':'normal',
            'theme-typography-subtitle2-font-variant-numeric':'normal',
            'theme-typography-subtitle2-letter-spacing':'normal',
            'theme-typography-subtitle2-line-height':'normal',
            'theme-typography-subtitle2-word-spacing':'normal',

            'theme-typography-body1-font-family':'Arial',
            'theme-typography-body1-font-size':'13.3333px',
            'theme-typography-body1-font-stretch':'100%',
            'theme-typography-body1-font-weight':400,
            'theme-typography-body1-font-style':'normal',
            'theme-typography-body1-font-variant-caps':'normal',
            'theme-typography-body1-font-variant-east-asian':'normal',
            'theme-typography-body1-font-variant-ligatures':'normal',
            'theme-typography-body1-font-variant-numeric':'normal',
            'theme-typography-body1-letter-spacing':'normal',
            'theme-typography-body1-line-height':'normal',
            'theme-typography-body1-word-spacing':'normal',

            'theme-typography-body2-font-family':'Arial',
            'theme-typography-body2-font-size':'13.3333px',
            'theme-typography-body2-font-stretch':'100%',
            'theme-typography-body2-font-weight':400,
            'theme-typography-body2-font-style':'normal',
            'theme-typography-body2-font-variant-caps':'normal',
            'theme-typography-body2-font-variant-east-asian':'normal',
            'theme-typography-body2-font-variant-ligatures':'normal',
            'theme-typography-body2-font-variant-numeric':'normal',
            'theme-typography-body2-letter-spacing':'normal',
            'theme-typography-body2-line-height':'normal',
            'theme-typography-body2-word-spacing':'normal',

            'theme-typography-button-font-family':'Arial',
            'theme-typography-button-font-size':'13.3333px',
            'theme-typography-button-font-stretch':'100%',
            'theme-typography-button-font-weight':400,
            'theme-typography-button-font-style':'normal',
            'theme-typography-button-font-variant-caps':'normal',
            'theme-typography-button-font-variant-east-asian':'normal',
            'theme-typography-button-font-variant-ligatures':'normal',
            'theme-typography-button-font-variant-numeric':'normal',
            'theme-typography-button-letter-spacing':'normal',
            'theme-typography-button-line-height':'normal',
            'theme-typography-button-word-spacing':'normal',

            'theme-typography-caption-font-family':'Arial',
            'theme-typography-caption-font-size':'13.3333px',
            'theme-typography-caption-font-stretch':'100%',
            'theme-typography-caption-font-weight':400,
            'theme-typography-caption-font-style':'normal',
            'theme-typography-caption-font-variant-caps':'normal',
            'theme-typography-caption-font-variant-east-asian':'normal',
            'theme-typography-caption-font-variant-ligatures':'normal',
            'theme-typography-caption-font-variant-numeric':'normal',
            'theme-typography-caption-letter-spacing':'normal',
            'theme-typography-caption-line-height':'normal',
            'theme-typography-caption-word-spacing':'normal',

            'theme-typography-overline-font-family':'Arial',
            'theme-typography-overline-font-size':'13.3333px',
            'theme-typography-overline-font-stretch':'100%',
            'theme-typography-overline-font-weight':400,
            'theme-typography-overline-font-style':'normal',
            'theme-typography-overline-font-variant-caps':'normal',
            'theme-typography-overline-font-variant-east-asian':'normal',
            'theme-typography-overline-font-variant-ligatures':'normal',
            'theme-typography-overline-font-variant-numeric':'normal',
            'theme-typography-overline-letter-spacing':'normal',
            'theme-typography-overline-line-height':'normal',
            'theme-typography-overline-word-spacing':'normal',
          },
        }}
        />
    </div>
  );
}
