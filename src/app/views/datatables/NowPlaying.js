import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';
import MovieTypeCard from './MovieTypeCard';
import SearchMovie from '../material-kit/tables/SearchMovie';

const NowPlaying = () => {
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
                <Breadcrumb routeSegments={[{ name: "DataTables", path: "/datatables" }, { name: "Now Playing" }]} />
            </Box>
    
          <SimpleCard title="Search movie">
            <SearchMovie />
          </SimpleCard>
    
          <SimpleCard title="Now Playing">
            <MovieTypeCard movieType={'/3/movie/now_playing'} />
          </SimpleCard>
        </Container>
      );
}

export default NowPlaying;

