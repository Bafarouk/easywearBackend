import { createSlice } from "@reduxjs/toolkit";
import { queryApi } from "../../utils/queryApi";


let initialState = {
    events:[],
    recentEvents:[],
    eventPosts: [],
    postCount: [],
    selectedEvent:{},
    errors: ""
};

const eventSlice = createSlice({
    name: "events",
    initialState,
    reducers:{
        listEvents(state ,action){
            state.events = action.payload;
        },
        listRecentEvents(state,action){
            state.recentEvents = action.payload;
        },
        listPostsByEvents(state,action){
            state.eventPosts = action.payload;
        },
        countPosts(state,action){
            state.postCount = action.payload;
        },
        addEvent: (state , action) => {
            const payload = action.payload;
            state.events.push(payload);
        },
        updateEvent: (state , action) => {
            //
        },
        deleteEvent: (state , action) => {
            //
        },
        setErrors(state,action){
            state.errors = action.payload;
        }
    }
});

export const fetchEvents = () => async (dispatch)  => {
    const [res, error] = await queryApi("event/getRecentEvents");

    if(error){
        dispatch(setErrors(error));
    } else{
        dispatch(listEvents(res));
    }
}

export const fetchRecentEvents = () => async (dispatch)  => {
    const [res, error] = await queryApi("event/getRecentEventsFin");

    if(error){
        dispatch(setErrors(error));
    } else{
        dispatch(listRecentEvents(res));
        
    }
}

export const fetchPostsCount = (eventId) => async (dispatch)  => {
    const [res, error] = await queryApi("post/get/countPosts/" + eventId);

    if(error){
        dispatch(setErrors(error));
    } else{
        dispatch(countPosts(res));
        console.log("im here");
    }
}

export const fetchPostsEvent = (eventId) => async (dispatch) => {
    const [res, error] = await queryApi("post/getEventPosts/" + eventId);

    if(error){
        dispatch(setErrors(error));
    } else {
        dispatch(listPostsByEvents(res));
    }
}

export const countPos = (state) => {
    return state.eventSlice.postCount ;
};

export const listPosts = ( state) => {
    return state.eventSlice.eventPosts;
}


export const { listEvents, listRecentEvents, listPostsByEvents , countPosts , addEvent , updateEvent , deleteEvent , setErrors } = eventSlice.actions;

export default eventSlice.reducer;