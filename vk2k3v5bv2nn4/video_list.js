const getRandomDuration = () => {
    const minutes = Math.floor(Math.random()*50)+5;
    const seconds = Math.floor(Math.random()*50)+5;
    const timeToString = (time) => time.toString().padStart(2, '0');
    return `${timeToString(minutes)}:${timeToString(seconds)}`;
};

const getVideoCard = (thumbnailUrl, channelName, channelLogoUrl, title, views) => {
    const defaultChannelLogoUrl = "https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj";
    channelLogoUrl = (channelLogoUrl || defaultChannelLogoUrl);

    return `
    <a href="#" class="video-card">
        <div class="thumbnail-container">
            <img src="${thumbnailUrl}" alt="Thumbnail" class="thumbnail">
            <p class="duration">${getRandomDuration()}</p>
        </div>
        <div class="video-details-container">
            <img src="${channelLogoUrl}" alt="Channel Logo" class="icon">
            <div class="video-metadata">
                <h2 class="title">${title}</h2>
                <p class="channel-name">${channelName}</p>
                <p class="views">${views}</p>
            </div>
        </div>
    </a>
    `;
};

const fillVideosList = () => {
    let videosMarkup = '';
    video_metadata.forEach(video => {
        videosMarkup += getVideoCard(
            video["Thumbnail URL"],
            video["Channel Name"],
            video["Channel Logo"],
            video["Title"],
            video["Views"]
        );
    });

    const videoList = document.querySelector('.video-list');
    videoList.innerHTML = videosMarkup;
}

fillVideosList();