import {FETCH_WEATHER} from '../actions/index'; // to avoid typo error which will be hard to debug! import directly

// for this app, user should be able to search multi-city, 
// store weather status per row per city
export default function(state=[], action){
    console.log('Action received', action);  // print out action object
    switch(action.type){
        case FETCH_WEATHER:
            return state.concat([action.payload.data]); // concat doesn't change original state array, it creates new array with new data and return new state 
            // return [ action.payload.data, ...state ]; // ES6 special syntax , same as above !
            // return [ action.payload.data ]; // this will change state with new data, not what we want!
    }

    return state; // reducer return state, so in your container, you need to define mapStateToProps to be able to 
    // pull data from reducer as properties in container
}