import React from 'react'

 const initialState={
                    foo:[1],
                    switch: false
                };
export default function FooReducer() {

    return (
        <div>
            {
               
                 function FooReducer2(state = initialState,action){
                    switch (action.type){
                        case 'SET_FOO':
                            return Object.assign({},state,{
                                foo : action.foo,
                                switch:true
                            });
                        case 'PUSH_FOO':
                            return Object.assign({}, state, {
                                foo:[
                                    ...state.foo,
                                    action.foo
                                ],
                                switch: !state.switch
                            });
                            default: 
                            return state;
                    }
                 
            }  }
        </div>
    )
}
