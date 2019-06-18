import React from 'react'

// JS FILE IMPORTS
import Introduction from './Header.js'
import Search_bar from './Searchbar.js'
import Search_bar_settings from './SearchSettings.js'

function Header(){
  return(
    <div>
      <Introduction />
      <Search_bar />
      <Search_bar_settings />
    </div>
  )
}

export default Header
