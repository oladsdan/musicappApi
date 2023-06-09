import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { useGetTopSongsByCountryQuery } from '../redux/services/shazamCore';

function CountryTracks() {
    const [country, setCountry] = useState("")
    const [loading, setLoading] = useState(true);
    const { activeSong, isPlaying } = useSelector((state) => state.player);

    // console.log(country);

    useEffect(() => {
        axios.get('https://geo.ipify.org/api/v2/country?apiKey=at_JPn87OMt36ojNfw2ZYHYD3cGy8CMq')
                .then((res) => setCountry(res?.data?.location?.country))
                .catch((err) => console.log(err))
                .finally(() => setLoading(false))
    },[country])

    const {data, isFetching, error} = useGetTopSongsByCountryQuery(country)
    console.log(data)

    if(isFetching && loading ) return <Loader title="Loading Songs around you" />

    if (error && country) return <Error />
    

    return (
        <div className="flex flex-col">
            <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Around You</h2>

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

export default CountryTracks;
