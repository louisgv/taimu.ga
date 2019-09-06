import React from 'react'

import { hot } from 'react-hot-loader/root'
import { ThemeProvider } from 'styled-components/macro'
import { theme, Global, Separator } from './styles'

import { Header } from 'components/Header'
import { Footer } from 'components/Footer'

import { Text } from 'styles'

import { repository, version } from '../package.json'

const date = new Date()
const year = date.getFullYear()

const App: React.FC<{ showTime: string }> = ({ showTime }) => (
  <ThemeProvider theme={theme}>
    <>
      <Global />
      <Header>{showTime}</Header>
      <Footer>
        <Text color="text">© {year} L</Text> <Separator width={0.5} />
        <a
          href={`https://github.com/${repository}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/{repository}@{version}
        </a>
      </Footer>
    </>
  </ThemeProvider>
)

export default hot(App)
