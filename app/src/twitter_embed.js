import React from 'react';
import './App.css';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

function Feed() {
  return (
    <div>
      <TwitterTimelineEmbed
        sourceType="provile"
        screenName="PaulQuinnTigers"
        options={{height: 400}}
      />
    </div>

  );
}

export default Feed;