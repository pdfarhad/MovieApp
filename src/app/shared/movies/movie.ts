
export interface Movie {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  imdb_id: string;
  vote_average: number;
  status: string;
  tagline: string;
  budget: number;
  revenue: number;
  runtime: number;
  genres: any[];
  production_companies: any[];
}