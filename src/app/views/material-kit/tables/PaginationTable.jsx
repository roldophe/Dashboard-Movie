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

const PaginationTable = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1"
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
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
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
            <TableCell align="left">Title</TableCell>
            <TableCell align="center">Overiview</TableCell>
            <TableCell align="center">Released Date</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allMovies
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((subscriber, index) => (
              <TableRow key={index}>
                <TableCell align="left">{subscriber.title}</TableCell>
                <TableCell align="center">{subscriber.overview && subscriber.overview.substring(0,17)+"..."}</TableCell>
                <TableCell align="center">{subscriber.release_date}</TableCell>
                <TableCell align="center">{subscriber.status}</TableCell>
                <TableCell align="center">${subscriber.amount}</TableCell>
                <TableCell align="right">
                  <IconButton>
                    <Icon color="error">close</Icon>
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
        rowsPerPage={rowsPerPage}
        count={allMovies.length}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={handleChangeRowsPerPage}
        nextIconButtonProps={{ "aria-label": "Next Page" }}
        backIconButtonProps={{ "aria-label": "Previous Page" }}
      />
    </Box>
  );
};

export default PaginationTable;