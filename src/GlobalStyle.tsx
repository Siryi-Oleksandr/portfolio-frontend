import { FC } from 'react';
import { Global, css } from '@emotion/react';
import 'modern-normalize';

const GlobalStyles: FC = () => {
  return (
    <div>
      <Global
        styles={css`
          body {
            height: 100%;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
              'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
              'Helvetica Neue', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;

            transition: background-color 250ms ease-in-out;
            ::-webkit-scrollbar {
              display: none;
            }
          }

          code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
              monospace;
          }

          textarea {
            resize: none;
          }
          a {
            text-decoration: none;
            color: currentColor;
          }
          ul {
            list-style: none;
          }
          button {
            padding: 0;
            margin: 0;
          }
          img {
            display: block;
            max-width: 100%;
            height: auto;
          }
          ul,
          p,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            margin: 0;
            padding: 0;
          }
        `}
      />
    </div>
  );
};

export default GlobalStyles;
