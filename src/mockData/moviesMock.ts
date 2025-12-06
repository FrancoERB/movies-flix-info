interface Movie {
  id: string;
  title: string;
  year: string;
  rating: number;
  genre: string;
  posterUrl: string;
  duration? : string;
}

export const movies : Movie[] =[
  {
    id: '0',
    title: "Dune: Part Two",
    year: "2024",
    rating: 8.8,
    genre: "Sci-Fi",
    posterUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop",
    duration: "2h 46m",
  },
  {
    id: '1',
    title: "Oppenheimer",
    year: "2023",
    rating: 8.5,
    genre: "Drama",
    posterUrl: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop",
    duration: "3h 0m",
  },
  {
    id: '2',
    title: "The Batman",
    year: "2022",
    rating: 7.8,
    genre: "Action",
    posterUrl: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop",
    duration: "2h 56m",
  },
  {
    id: '3',
    title: "Interstellar",
    year: "2014",
    rating: 9.0,
    genre: "Sci-Fi",
    posterUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=600&fit=crop",
    duration: "2h 49m",
  },
   {
    id: "4",
    title: "Dune: Part Two",
    year: "2024",
    rating: 8.8,
    genre: "Sci-Fi",
    posterUrl:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop",
    duration: "2h 46m",
  },
  {
    id: "5",
    title: "Oppenheimer",
    year: "2023",
    rating: 8.6,
    genre: "Biografía",
    posterUrl:
      "https://images.unsplash.com/photo-1517602302552-471fe67acf66?w=400&h=600&fit=crop",
    duration: "3h 0m",
  },
  {
    id: "6",
    title: "John Wick: Chapter 4",
    year: "2023",
    rating: 7.9,
    genre: "Acción",
    posterUrl:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=400&h=600&fit=crop",
    duration: "2h 49m",
  },
  {
    id: "7",
    title: "Spider-Man: Across the Spider-Verse",
    year: "2023",
    rating: 8.9,
    genre: "Animación",
    posterUrl:
      "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=400&h=600&fit=crop",
    duration: "2h 20m",
  },
  {
    id: "8",
    title: "The Batman",
    year: "2022",
    rating: 7.8,
    genre: "Thriller",
    posterUrl:
      "https://images.unsplash.com/photo-1530319067432-f2a729c03db5?w=400&h=600&fit=crop",
    duration: "2h 55m",
  },
  {
    id: "9",
    title: "Avatar: The Way of Water",
    year: "2022",
    rating: 7.7,
    genre: "Aventura",
     posterUrl:
    "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=400&h=600&fit=crop",
    duration: "3h 12m",
  },
];