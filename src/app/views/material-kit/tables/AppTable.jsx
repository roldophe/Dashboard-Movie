import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import SearchMovie from "./SearchMovie";
import PopularMovies from "./PopularMovies";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const AppTable = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Material", path: "/material" }, { name: "table" }]} />
      </Box>
      <SimpleCard title="Search Movie">
        <SearchMovie />
      </SimpleCard>
      <SimpleCard title="Popular Movie">
        <PopularMovies />
      </SimpleCard>

      
    </Container>
  );
};

export default AppTable;
