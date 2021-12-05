import React,{useState} from 'react'
//Modify this component so that it behaves properly
//Modifier ce composant pour qu'il se comporte correctement
function Test({getNewResult}) {
    const [result, setResult] = useState('')

    return (
        <div>
            <button id="button" onClick={()=>setResult(getNewResult())}>Click</button>
           {result != null && <span id="result">{result}</span>}
        </div>
    )
}
//Modify this function if you want to change the preview
//It will not be evaluated as part of the assessment(évaluation)
export function Preview(){
    return <Test getNewResult={() => 'test'}/>
}//Do not change
export default Test
