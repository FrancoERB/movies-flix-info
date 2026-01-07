import { useEffect, useReducer } from "react";
import { adaptSeriesToMedia } from "../adapter/mediaAdapter";
import { getPopularSeries, getSeriesAiringToDay, getSeriesOnTheAir, getSeriesTopRated } from "../api/getSeries";
import type { Media } from "../domain/media";
type State = {
    popular: Media[]
    airingToDay: Media[]
    onTheAir: Media[]
    topRated: Media[]
}

type Action = 
    | {type: 'SET_POPULAR'; payload: Media[]}
    | {type: 'SET_AIRING_TODAY'; payload: Media[]}
    | {type: 'SET_ON_THE_AIR'; payload: Media[]}
    | {type: 'SET_TOP_RATED'; payload: Media[]}



const initialState: State = {
    popular: [],
    airingToDay:[],
    onTheAir: [],
    topRated: [],
}   

function reducer (state : State, action : Action) : State {
    switch(action.type) {
        case 'SET_POPULAR': 
        return {...state, popular: action.payload};
        case 'SET_AIRING_TODAY': 
        return {...state, airingToDay: action.payload};
        case 'SET_ON_THE_AIR': 
        return {...state, onTheAir: action.payload};
        case 'SET_TOP_RATED': 
        return {...state, topRated: action.payload};
        default:
        return state;
    }
}

export function useHomeSeries() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(()=>{
                getPopularSeries().then((data)=>{
                    dispatch({type:'SET_POPULAR', payload:adaptSeriesToMedia(data)})
                })
                getSeriesAiringToDay().then((data) => {
                    dispatch({type: 'SET_AIRING_TODAY', payload: adaptSeriesToMedia(data)})
                })
                getSeriesOnTheAir().then((data) => {
                    dispatch({type: 'SET_ON_THE_AIR', payload: adaptSeriesToMedia(data)})
                })    
                getSeriesTopRated().then((data) => {
                    dispatch({type: 'SET_TOP_RATED', payload: adaptSeriesToMedia(data)})
                })  

    },[])
 return state;   
}