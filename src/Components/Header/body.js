import React from 'react'

// JS FILE IMPORTS
import Introduction from './Header.js'
import Searchbar from './Searchbar.js'
import SearchbarSettings from './SearchSettings.js'

function Header(){
  return(
    <div>
      <Introduction />
      <Searchbar />
      <SearchbarSettings />
    </div>
  )
}

export default Header
