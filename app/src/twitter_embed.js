import React from 'react';
import './App.css';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

function Feed() {
  return (
    
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="PaulQuinnTigers"
        options={{height: 400}}
      />
    

  );
}

export default Feed;