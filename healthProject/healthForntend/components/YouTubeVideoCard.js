import React from 'react';
import { View, StyleSheet } from 'react-native';
import { YouTubeIframe } from 'react-native-youtube-iframe';

const YouTubeVideoCard = () => {
	return (
		<View style={styles.container}>
			<YouTubeIframe
				videoId='your-video-id-here'
				play={true}
				fullscreen={true}
				controls={2}
				onChangeState={(event) => {
					if (event === 'ended') {
						// Video playback ended
					}
				}}
			/>
		</View>
	);
};

export default YouTubeVideoCard;
const styles = StyleSheet.create({
	container: {
		flex: 1, // Take up the entire screen
	},
});
