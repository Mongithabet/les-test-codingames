import React, {useContext} from 'react'
import { ColorContext, UserContext } from './MyContext'
export const ContentData = () => {
    const user =useContext(UserContext)
    const color =useContext(ColorContext)


    return (
        <div style={{color: color}}>
                   <ul>
                        <li> Nom: {user.name} </li>
                        <li> Age: {user.age} </li>
                        <li> Couleur: {color}  </li>
                    </ul>
        </div>
    )
}
{/*---------------Methode Classique------------------ */}
      
{/*  <UserContext.Consumer>
           
            {
                
                
                user =>{
                   return(
                    <ColorContext.Consumer>
                    {
                        color =>{
                            return(
                <div style={{color: color}}>
                    <ul>
                        <li> Nom: {user.name} </li>
                        <li> Age: {user.age} </li>
                        <li> Couleur: {color}  </li>
                    </ul>
                </div>  )
                        }
                    }
                    </ColorContext.Consumer> 
                   
                   )
                }
                
            }
                
        </UserContext.Consumer> */}