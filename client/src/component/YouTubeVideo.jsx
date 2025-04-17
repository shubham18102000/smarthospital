import React from 'react';

const YouTubeVideo = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '40px',
    marginBottom: '40px',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const iframeStyle = {
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
  };

  const iframeHoverStyle = {
    transform: 'scale(1.05)',
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Watch this amazing video:</h2>
      <iframe
        style={iframeStyle}
        width="900"
        height="450"
        src="https://www.youtube.com/embed/sizFK8IugYw"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default YouTubeVideo;
