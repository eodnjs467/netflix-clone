export interface ReqMovie {
  certification: string;
  certification_gte: string;
  certification_lte: string;
  certification_country: string;
  include_adult: boolean;
  include_video: boolean;
  language: string;
  page: number;
  primary_release_year: number;
  primary_release_date_gte: string;
  primary_release_date_lte: string;
  region: string;
  release_date_gte: string;
  release_date_lte: string;
  sort_by: string;
  vote_average_gte: number;
  vote_average_lte: number;
  vote_count_gte: number;
  vote_count_lte: number;
  watch_region: string;
  with_cast: string;
  with_companies: string;
  with_crew: string;
  with_genres: string;
  with_keywords: string;
  with_origin_country: string;
  with_original_language: string;
  with_people: string;
  with_release_type: number;
  with_runtime_gte: number;
  with_runtime_lte: number;
  with_watch_monetization_types: string;
  with_watch_providers: string;
  without_companies: string;
  without_genres: string;
  without_keywords: string;
  without_watch_providers: string;
  year: number;
}
export interface DetailContents {
  title: string;
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    backdrop_path: string;
    id: number;
    name: string;
    poster_path: string;
  };
  budget: number;
  contentsType: "movie" | "tv";
  genres: { id: number; name: string }[];
  homepage: "string";
  id: number;
  imdb_id: string;
  languages: string[];
  last_air_date?: string;
  last_episode_to_air: {
    air_date: string;
    episode_number: number;
    name: string;
    overview: string;
    production_code: string;
    runtime: number;
  };
  name: string;
  networks: {
    id: string;
    logo_path: string;
    name: string;
    origin_country: string;
  };
  next_episode_to_air: {
    air_date: string;
    episode_number: number;
    episode_type: string;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    runtime: number;
    season_number: number;
    show_id: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
  };
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: { iso_3166_1: string; name: string }[];

  seasons: {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
    vote_average: number;
  }[];
  release_date?: string;
  revenue: number;
  runtime: number;
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
  type: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface TvContents {}
export type Trailers = {
  id: string;
  name: string;
  key: string;
  site: string;
  official: boolean;
  published_at: string;
}[];
