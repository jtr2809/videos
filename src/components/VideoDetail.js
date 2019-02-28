import React from 'react'

const VideoDetail = ({ video }) => {
    if (!video) {
        return ( <div> Loading... </div>
        )
    }
    return (
        <div>
            <div className="ui segment">
                <h4 className="header">{video.snippets.title}</h4>
                <p>{video.snippets.description}</p>
            </div>
        </div>
    )
}
export default VideoDetail