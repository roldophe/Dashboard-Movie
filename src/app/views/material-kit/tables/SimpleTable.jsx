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
} from "@mui/material";
import { useEffect } from "react"; 
import { useDispatch, useSelector } from "react-redux";
import { fectch_all_trending } from "redux/action/TrendingActions";

const StyledTable = styled(Table)(({ theme }) => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
  },
}));

const subscribarList = [
  {
    name: "john doe",
    date: "18 january, 2019",
    amount: 1000,
    status: "close",
    company: "ABC Fintech LTD.",
  },
  {
    name: "kessy bryan",
    date: "10 january, 2019",
    amount: 9000,
    status: "open",
    company: "My Fintech LTD.",
  },
  {
    name: "james cassegne",
    date: "8 january, 2019",
    amount: 5000,
    status: "close",
    company: "Collboy Tech LTD.",
  },
  {
    name: "lucy brown",
    date: "1 january, 2019",
    amount: 89000,
    status: "open",
    company: "ABC Fintech LTD.",
  },
  {
    name: "lucy brown",
    date: "1 january, 2019",
    amount: 89000,
    status: "open",
    company: "ABC Fintech LTD.",
  },
  {
    name: "lucy brown",
    date: "1 january, 2019",
    amount: 89000,
    status: "open",
    company: "ABC Fintech LTD.",
  },
];

const SimpleTable = () => {
  const dispatch = useDispatch();
    const { movies } = useSelector(state => state.trendingReducer);
    useEffect(() => {
        dispatch(fectch_all_trending())
    }, [])
    console.log("Movie action: ", movies)

    console.log('Movies', movies && movies.results);
  return (
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell align="left">Title</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Release Date</TableCell>
            <TableCell align="center">Movie Type</TableCell>
            <TableCell align="center">Vote Average </TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {movies && movies.results && movies.results.map((movie, index) => (
            <TableRow key={index}>
              <TableCell align="left">{movie && movie.title || movie.name}</TableCell>
              <TableCell align="center">{movie && movie.overview && movie.overview.substring(0,20)+"..."}</TableCell>
              <TableCell align="center">{movie && movie.release_date}</TableCell>
              <TableCell align="center">{movie && movie.media_type}</TableCell>
              <TableCell align="center">{movie && movie.vote_average}</TableCell>
              
              <TableCell align="right">
                <IconButton>
                  <Icon color="error">close</Icon>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </Box>
  );
};

export default SimpleTable;
