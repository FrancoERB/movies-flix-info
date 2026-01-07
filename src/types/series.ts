interface Genre {
  id: number;
  name: string;
}

export interface Serie {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    genres:            Genre[];
    id:                number;
    original_language: string;
    original_name:     string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    first_air_date:    Date;
    name:              string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}
