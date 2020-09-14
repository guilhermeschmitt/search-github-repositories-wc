import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root  {
    min-height: 100%;
    background: var(--primary);
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    color: var(--black);
    transition: color .2s ease-out;
  }
  .ant-divider-horizontal {
    border-top-color: var(--black);
  }

  .ant-message-notice {
    span {
      color: #000;
    }
    .ant-message-success {
      svg {
        fill: #52c41a;
      }
    }
    .ant-message-warning {
      svg {
        fill: #faad14;
      }
    }
    .ant-message-error {
      svg {
        fill: #ff4d4f;
      }
    }
  }

  ul {
    list-style: none;
  }
  :root {
    ${props => {
      const theme = props.theme;
      let append = '';

      Object.entries(theme).forEach(([prop, value]) => {
        append += `--${prop}: ${value};`;
      });

      return append;
    }}
  }
`
