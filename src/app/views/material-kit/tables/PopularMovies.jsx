import {
  Box,
  Icon,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
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

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=${page + 1}`
        );
        if (response.ok) {
          const data = await response.json();
          setMovies(data.results);
          setTotalPages(500);
        } else {
          setError("Failed to fetch movies");
        }
      } catch (error) {
        setError("An error occurred while fetching movies");
      }
    };

    fetchMovies();
  }, [page]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 20));
    setPage(0);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  const allMovies = movies || [];

  return (
    <Box width="100%" overflow="auto">
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
          {allMovies.map((subscriber, index) => (
            <TableRow key={index}>
              <TableCell align="left">{subscriber.id}</TableCell>
              <TableCell align="center">{subscriber.title}</TableCell>
              <TableCell align="center">
                {subscriber.overview && subscriber.overview.substring(0, 17) + "..."}
              </TableCell>
              <TableCell align="center">{subscriber.release_date}</TableCell>
              <TableCell align="center">{subscriber.vote_average}</TableCell>
              <TableCell align="center">{subscriber.vote_count}</TableCell>
              
              <TableCell align="right">
                <IconButton>
                <Icon color="primary">edit</Icon>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>

      <TablePagination
        sx={{ px: 2 }}
        page={page}
        component="div"
        rowsPerPage={movies.length}
        count={allMovies.length*totalPages}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[20]}
        onRowsPerPageChange={handleChangeRowsPerPage}
        nextIconButtonProps={{ "aria-label": "Next Page" }}
        backIconButtonProps={{ "aria-label": "Previous Page" }}
      />
    </Box>
  );
};
export default PopularMovies;
