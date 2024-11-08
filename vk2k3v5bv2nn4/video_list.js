const videoList = document.querySelector('.video-list');

const getRandomDuration = () => {
    const minutes = Math.floor(Math.random()*50)+5;
    const seconds = Math.floor(Math.random()*50)+5;
    const timeToString = (time) => time.toString().padStart(2, '0');
    return `${timeToString(minutes)}:${timeToString(seconds)}`;
};

const getVideoCard = (thumbnailUrl, channelName, channelLogoUrl, title, views) => {
    const defaultChannelLogoUrl = "https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj";
    channelLogoUrl = String(channelLogoUrl || defaultChannelLogoUrl);

    return `
    <a href="#" class="video-card">
        <div class="thumbnail-container">
            <img src="${thumbnailUrl}" alt="Thumbnail" class="thumbnail">
            <p class="duration">${getRandomDuration()}</p>
        </div>
        <div class="video-info">
            <img src="${channelLogoUrl}" alt="Channel Logo" class="icon">
            <div class="video-details">
                <h2 class="title">${title}</h2>
                <p class="channel-name">${channelName}</p>
                <p class="views">${views}</p>
            </div>
        </div>
    </a>
    `;
};

const fillVideoCardsList = () => {
    let videoCardsMarkup = '';
    video_metadata.forEach(videoDetail => {
        videoCardsMarkup += getVideoCard(
            videoDetail["Thumbnail URL"],
            videoDetail["Channel Name"],
            videoDetail["Channel Logo"],
            videoDetail["Title"],
            videoDetail["Views"]
        );
    });
    videoList.innerHTML = videoCardsMarkup;
};

fillVideoCardsList();