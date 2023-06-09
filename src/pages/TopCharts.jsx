import axios from 'axios';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
// import { useGetTopChartsByCountryQuery } from '../redux/services/shazamCore';

function TopCharts() {
    const { activeSong, isPlaying } = useSelector((state) => state.player);

    // console.log(country);

   
    // const {data, isFetching, error} = useGetTopChartsByCountryQuery()
    console.log(data)

    if(isFetching) return <Loader title="Loading Top Charts" />

    if (error) return <Error />
    

    return (
        <div className="flex flex-col">
            <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Discover Top Charts</h2>

            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {data?.map((song, i) => (
                    <SongCard
                        key={song.key}
                        song={song}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={data}
                        i={i}
                    />
                ))}
            </div>
        </div>
    );
}

export default TopCharts;
