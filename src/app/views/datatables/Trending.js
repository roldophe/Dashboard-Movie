import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';
import SearchMovie from 'app/views/material-kit/tables/SearchMovie';
import React from 'react';
import MovieTypeCard from './MovieTypeCard';

const Trending = () => {
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
                <Breadcrumb routeSegments={[{ name: "DataTables", path: "/datatables" }, { name: "Trending" }]} />
            </Box>
    
          <SimpleCard title="Trending Search">
            <SearchMovie />
          </SimpleCard>
    
          <SimpleCard title="Trending Movie">
            <MovieTypeCard movieType={'3/trending/all/day'} />
          </SimpleCard>
        </Container>
      );
}

export default Trending;
