const getVideoCard = (thumbnailUrl, channelName, channelLogoUrl, title, views) => {
    return `
    <a href="#" class="video-card">
        <div class="thumbnail-container">
            <img src="${thumbnailUrl}" alt="Thumbnail" class="thumbnail">
            <p class="duration">${duration}</p>
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
}