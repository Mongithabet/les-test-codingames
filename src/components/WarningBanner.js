import React from 'react'
import { ReactDOM } from 'react';
export default function WarningBanner(props) {
    if (!props.warn){
        return null;
    }
    return (
        <div className="warning">
          Warning!  
        </div>
    )
}
// ReactDOM.render(
//     <WarningBanner warn />,
//     document.getElementById('container')
// )