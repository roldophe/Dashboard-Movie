import styled from '@emotion/styled';
import { Box } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';
import React from 'react';
import SearchMovie from '../material-kit/tables/SearchMovie';
import MovieTypeCard from './MovieTypeCard';

const OnTv = () => {
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
                <Breadcrumb routeSegments={[{ name: "DataTables", path: "/datatables" }, { name: "Tv Shows" }]} />
            </Box>
    
          <SimpleCard title=" Search movie">
            <SearchMovie />
          </SimpleCard>
    
          <SimpleCard title="Tv Shows">
            <MovieTypeCard movieType={'3/tv/on_the_air'} />
          </SimpleCard>
        </Container>
      );
}

export default OnTv;
