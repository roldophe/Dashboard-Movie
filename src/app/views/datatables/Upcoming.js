import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';
import React from 'react';
import MovieTypeCard from './MovieTypeCard';
import SearchMovie from '../material-kit/tables/SearchMovie';

const Upcoming = () => {
    const Container = styled("div")(({ theme }) => ({
        margin: "30px",
        [theme.breakpoints.down("sm")]: { margin: "16px" },
        "& .breadcrumb": {
          marginBottom: "30px",
          [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
        },
      }));
    return (
        <Container>
            <Box className="breadcrumb">
                <Breadcrumb routeSegments={[{ name: "DataTables", path: "/datatables" }, { name: "Upcoming" }]} />
            </Box>
    
          <SimpleCard title="Search movie">
            <SearchMovie />
          </SimpleCard>
    
          <SimpleCard title="Upcoming">
            <MovieTypeCard movieType={'/3/movie/upcoming'} />
          </SimpleCard>
        </Container>
      );
}

export default Upcoming;
