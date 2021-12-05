import React,{useContext} from 'react'
const UserContext = React.createContext()

function Page({user}){

    return(
        
    <UserContext.Provider value={user}>
    <div>
        <div>...</div>
        <UserInfoWithTitle title='User Info'  />
        <div>...</div>
    </div>
     </UserContext.Provider>
    );
}
function UserInfoWithTitle({title}){
    const user = useContext(UserContext)
    return(
<div>
        <div>{title}</div>
        <UserInfo user={user}/>
        
         </div>
               )
}
//Do not change the UserInfo component
function UserInfo({user}){

    return (
                   <div>
         <span>{user.firstName}</span>
         <span>{user.lastName}</span>
     </div>           
    
    );
}

//Modify this function if you want to change the preview
//It will not be evaluated as part of the assessment
//Il ne sera pas évalué dans le cadre de l'évaluation
export function PreviewPage(){
    
    return (
        <Page user={{firstName:'John',lastName:'Doe'}}/>
    );
}
//Do not change
export {    Page,    UserInfoWithTitle,    UserInfo}
