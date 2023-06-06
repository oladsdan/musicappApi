import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { useGetArtistDetailsQuery, useGetArtistTopSongsQuery } from "../redux/services/shazamCore";
import RelatedArtistsSong from "../components/RelatedArtistsSong";




// import { useGetSongDetailsQuery, useGetSongRelatedQuery } from "../redux/services/shazamCore";

function ArtistDetails() {
    const { id: artistId } = useParams();
    // console.log(id)
    const { activeSong, isPlaying } = useSelector((state)=> state.player)
    const {data : artistData, isFetching:isFetchingArtistDetails } = useGetArtistDetailsQuery(artistId)
    const {data: artistSong, isFetching: isFetchingSongs } = useGetArtistTopSongsQuery(artistId)
    
    console.log(artistSong)
    
    console.log(artistId)
    console.log("ArtistDetails")
    console.log(artistData)


    if (isFetchingArtistDetails) return <Loader title="Searching Song details" />  

    return (
        <div className="flex flex-col">
            {/* <DetailsHeader artistId={artistId} artistData={artistData} /> */}

            <RelatedArtistsSong
            data={artistSong}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
             />
             
        </div>
    )
}

export default ArtistDetails;
