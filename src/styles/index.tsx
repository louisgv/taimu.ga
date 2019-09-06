import styled, { createGlobalStyle } from 'styled-components/macro'
import { DefaultTheme } from 'styled-components'
import { flexCenterColumn } from './Mixin';

export const theme: DefaultTheme = {
  color: {
    text: '#FFFFFF',
    primaryText: '#212121',
    secondaryText: '#757575',

    divider: '#BDBDBD',

    primary: '#200f21',
    darkPrimary: '#382039',
    lightPrimary: '#5a3d5c',
    accentColor: '#f638dc',
    
    disabled: '#aaa',

    idle: '#f638dc',
    pending: '#E7AB48',
    running: '#3772FF',
    success: '#16b50c',
    error: '#b00020'
  },

  zIndex: {
    logo: 1000,
    fab: 1200,
    modal: 1500
  },

  fontSize: {
    header: 3,
  },

  content: {
    
  },

  font: {
    title: '',
    subtitle: '',
    text:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif",
    code: "'Source Code Pro', monospace"
  }
}

export const Global = createGlobalStyle`
  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    user-select: none;
    font-family: ${p => p.theme.font.text};

    ${flexCenterColumn};
  }

  a {
    color: ${p => p.theme.color.primary};
    text-decoration: none;
  }

  a:visited {
    color: ${p => p.theme.color.accentColor};
  }

  a:hover,
  a:visited:hover {
    opacity: 0.7;
  }

  ::-webkit-scrollbar {
    width: 9px;
    height: 9px;
  }

  ::-webkit-scrollbar-track {
    background: ${p => p.theme.color.primary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${p => p.theme.color.text};
  }
`

export const Separator = styled.div<SeparatorProps>`
  width: ${p => p.width || 0}em;
  height: ${p => p.height || 0}em;
`

export const Text = styled.span<ColorProps & { fontSize?: string }>`
  color: ${p => (p.color ? p.theme.color[p.color] : p.theme.color.primary)};
  font-size: ${p => p.fontSize || '1em'};
`
