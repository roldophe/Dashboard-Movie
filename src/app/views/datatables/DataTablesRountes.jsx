import NowPlaying from "./NowPlaying"
import OnTv from "./OnTv"
import People from "./People"
import Popular from "./Popular"
import Trending from "./Trending"
import Upcoming from "./Upcoming"

const DataTableRoutes = [
    { path: 'datatables/trending', element: <Trending /> },
    { path: 'datatables/people', element: <People /> },
    { path: 'datatables/upcoming', element: <Upcoming /> },
    { path: 'datatables/popular', element: <Popular /> },
    { path: 'datatables/nowplaying', element: <NowPlaying /> },
    { path: 'datatables/ontv', element: <OnTv /> },
]
export default DataTableRoutes