import {
  Box,
  Icon,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";

const StyledTable = styled(Table)(() => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": {
      "& th": { paddingLeft: 0, paddingRight: 0 },
    },
  },
  "& tbody": {
    "& tr": {
      "& td": { paddingLeft: 0, textTransform: "capitalize" },
    },
  },
}));

const SearchMovie = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0); 
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=${page + 1}&query=${encodeURIComponent(searchTerm)}`
        );
        if (response.ok) {
          const data = await response.json();
          setMovies(data.results);
        } else {
          setError("Failed to fetch movies");
        }
      } catch (error) {
        setError("An error occurred while fetching movies");
      }
    };

    fetchMovies();
  }, [page, searchTerm]);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  const allMovies = movies || [];

  return (
    <Box width="100%" overflow="auto">
      <TextField
        label="Search by title"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
        fullWidth
        sx={{ mb: 2 }}
      />

      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell align="left">ID</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Overiview</TableCell>
            <TableCell align="center">Released Date</TableCell>
            <TableCell align="center">Vote Average</TableCell>
            <TableCell align="center">Vote Count</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allMovies.map((movie) => (
            <TableRow key={movie.id}>
              <TableCell align="left">{movie.id}</TableCell>
              <TableCell align="center">{movie.title}</TableCell>
              <TableCell align="center">
                {movie.overview && movie.overview.substring(0, 17) + "..."}
              </TableCell>
              <TableCell align="center">{movie.release_date}</TableCell>
              <TableCell align="center">{movie.vote_average}</TableCell>
              <TableCell align="center">{movie.vote_count}</TableCell>
              <TableCell align="right">
                <IconButton>
                    <Icon color="primary">edit</Icon>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </Box>
  );
};

export default SearchMovie;