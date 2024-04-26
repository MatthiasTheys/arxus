function showVideo(videoNumber) {
    // Construct the ID of the video element based on the passed videoNumber
    var videoId = 'video' + videoNumber;
    
    // Get all video elements
    var videoElements = document.querySelectorAll('video');

    // Hide all videos by adding the 'd-none' class
    videoElements.forEach(function(video) {
        video.classList.add('d-none');
    });

    // Get the video element corresponding to the clicked button
    var videoToShow = document.getElementById(videoId);

    // Show the selected video by removing the 'd-none' class
    if (videoToShow) {
        videoToShow.classList.remove('d-none');
    }
}

