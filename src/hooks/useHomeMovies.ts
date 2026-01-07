import { useEffect, useReducer } from "react";
import { adaptMoviesToMedia } from "../adapter/mediaAdapter";
import { getMoviesByGenre, getPopularMovies } from "../api/getMovies";
import type { Media } from "../domain/media";

type State = {
    popular: Media[];
    action: Media[];
    scifi: Media[];
    adventure: Media[];
    horror: Media[];
    mistery: Media[];
    isLoading: boolean;
}

type Action = 
    | {type: 'SET_POPULAR'; payload: Media[]}
    | {type: 'SET_ACTION'; payload: Media[]}
    | {type: 'SET_SCIFI'; payload: Media[]}
    | {type: 'SET_ADVENTURE'; payload: Media[]}
    | {type: 'SET_HORROR'; payload: Media[]}
    | {type: 'SET_MISTERY'; payload: Media[]}
    | {type: 'SET_LOADING'; payload: boolean}


const initialState: State = {
    popular: [],
    action: [],
    scifi: [],
    adventure: [],
    horror: [],
    mistery: [],
    isLoading: true,
}

function reducer (state : State, action : Action) : State {
    switch (action.type) {
        case 'SET_POPULAR': 
        return {...state, popular: action.payload};
        case 'SET_ACTION': 
        return {...state, action: action.payload};
         case 'SET_SCIFI': 
        return {...state, scifi: action.payload};
         case 'SET_ADVENTURE': 
        return {...state, adventure: action.payload};
         case 'SET_HORROR': 
        return {...state, horror: action.payload};
         case 'SET_MISTERY': 
        return {...state, mistery: action.payload};
         case 'SET_LOADING': 
        return {...state, isLoading: action.payload};
        default:
            return state;
    }
}

export function useHomeMovies() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({type:'SET_LOADING', payload: true})
        getPopularMovies().then((data)=>{
            dispatch({type:'SET_POPULAR', payload:adaptMoviesToMedia(data)})
        }).finally(() => {
        dispatch({type:'SET_LOADING', payload: false})
        } )
        getMoviesByGenre(28).then((d) => {
            dispatch({type:'SET_ACTION', payload:adaptMoviesToMedia(d)})
        })
         getMoviesByGenre(878).then((d) => {
            dispatch({type:'SET_SCIFI', payload:adaptMoviesToMedia(d)})
        })
         getMoviesByGenre(12).then((d) => {
            dispatch({type:'SET_ADVENTURE', payload:adaptMoviesToMedia(d)})
        })
         getMoviesByGenre(27).then((d) => {
            dispatch({type:'SET_HORROR', payload:adaptMoviesToMedia(d)})
        })
         getMoviesByGenre(9648).then((d) => {
            dispatch({type:'SET_MISTERY',payload:adaptMoviesToMedia(d)})
        })
    },[])
    return state;
}