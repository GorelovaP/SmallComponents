import {reduser, TOGGLE_COLLAPSED, TypeOfState} from "./reduser";

test("Reduser should change value to opposite value ", ()=>{
    //data
     const state: TypeOfState={
         collapsed:false
     }
    //action
    const NewState = reduser(state, {type: TOGGLE_COLLAPSED})
    //expection
    expect(NewState.collapsed).toBe(true)
})

test("Reduser should change value to opposite value ", ()=>{
    //data
    const state: TypeOfState={
        collapsed:true
    }
    //action
    const NewState = reduser(state, {type: TOGGLE_COLLAPSED})
    //expection
    expect(NewState.collapsed).toBe(false)
})
