import { useEffect, useReducer } from "react";
import { getMoviesByGenre, getPopularMovies } from "../api/getMovies";
import type { Movie } from "../types/movie";

type State = {
    popular: Movie[];
    action: Movie[];
    scifi: Movie[];
    adventure: Movie[];
    horror: Movie[];
    mistery: Movie[];
    isLoading: boolean;
}

type Action = 
    | {type: 'SET_POPULAR'; payload: Movie[]}
    | {type: 'SET_ACTION'; payload: Movie[]}
    | {type: 'SET_SCIFI'; payload: Movie[]}
    | {type: 'SET_ADVENTURE'; payload: Movie[]}
    | {type: 'SET_HORROR'; payload: Movie[]}
    | {type: 'SET_MISTERY'; payload: Movie[]}
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
            dispatch({type:'SET_POPULAR', payload:data})
        }).finally(() => {
        dispatch({type:'SET_LOADING', payload: false})
        } )
        getMoviesByGenre(28).then((d) => {
            dispatch({type:'SET_ACTION', payload:d})
        })
         getMoviesByGenre(878).then((d) => {
            dispatch({type:'SET_SCIFI', payload:d})
        })
         getMoviesByGenre(12).then((d) => {
            dispatch({type:'SET_ADVENTURE', payload:d})
        })
         getMoviesByGenre(27).then((d) => {
            dispatch({type:'SET_HORROR', payload:d})
        })
         getMoviesByGenre(9648).then((d) => {
            dispatch({type:'SET_MISTERY', payload:d})
        })
    },[])
    return state;
}