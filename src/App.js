import React, { Component } from 'react'
import { InputWithFocusButton } from './components/InputWithFocusButton'
import { Input } from './components/InputFrwFocus'
import { FocusableInput } from './components/InputFrwFocus'
import { Page, PreviewPage, UserInfo } from './components/Page'
import { Message } from './components/Message'
import ResultDisplayer, { PreviewResultDisplayer } from './components/ResultDisplayer'
import UserContextMyComp from './components/UserContextMyComp'
import FooReducer from './components/FooReducer'
import WarningBanner from './components/WarningBanner'
import MyComponent from './components/MyComponent'
import ButtonAndInput from './components/ButtonAndInput'
import { Preview } from './components/ButtonAndInput'
import Test from './components/Test'
 export class App extends Component {
     
    render() {
        return (
            <div className="test">
                
         {/* < InputWithFocusButton />  */}
            {/* <FocusableInput/> */}
            {/* <PreviewPage/>  */}
            {/* <Message/> */}
            {/* <PreviewResultDisplayer/> */}
             {/* <UserContextMyComp/> */}
             {/* <FooReducer/> */}
            {/* <WarningBanner warn={warn}/> */}
            {/* <MyComponent/> */}
            <Test/>
            </div>



        )
    }
}

export default App
