import React from 'react'

import EmailContentComponent from './EmailComponents/EmailContentComponent'
import EmailToolbarComponent from './EmailComponents/EmailToolbarComponent'
function ReadingComponent({currentTab, setCurrentTab}) {
  return (
    <div>
      <EmailToolbarComponent setCurrentTab = {setCurrentTab}/>
      <EmailContentComponent currentTab = {currentTab}/>
    </div>
  )
}

export default ReadingComponent