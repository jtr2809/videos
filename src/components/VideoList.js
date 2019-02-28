import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos}) => {

    const renderedList = videos.map((video) => {
        return <VideoItem video = {video}></VideoItem>
    })
    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    )
}


export default VideoList