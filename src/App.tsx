// import { useState } from 'react'
import './App.css'
import EmojiResults from './components/EmojiResults/EmojiResults'
import Header from './components/Header/Header'
import SearchInput from './components/SearchInput/SearchInput'

function App() {

  return (
    <>
      <Header />
      <SearchInput />
      <EmojiResults />
    </>
  )
}

export default App
