import PropTypes from "prop-types";
import React from "react";

const VideoEmbed = ({ embedId }) => (
	<div className="">
		<iframe
			width="853"
			height="480"
			src={`https://www.YouTube.com/embed/${embedId}`}
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
			title="Embedded Video"
		/>
	</div>
);

VideoEmbed.propTypes = {
	embedId: PropTypes.string.isRequired,
};

export default VideoEmbed;
