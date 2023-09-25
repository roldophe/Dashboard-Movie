import { Breadcrumb, SimpleCard } from 'app/components';
import React from 'react';
import SearchMovie from '../material-kit/tables/SearchMovie';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import MovieTypeCard from './MovieTypeCard';

const Popular = () => {
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
                <Breadcrumb routeSegments={[{ name: "DataTables", path: "/datatables" }, { name: "Popular Movie" }]} />
            </Box>
    
          <SimpleCard title="Search movie">
            <SearchMovie />
          </SimpleCard>
    
          <SimpleCard title="Popular Movie">
            <MovieTypeCard movieType={'/3/tv/popular'} />
          </SimpleCard>
        </Container>
      );
}
export default Popular;
