// video?type=foo&episode=3
import type { NextApiRequest, NextApiResponse } from 'next';

// interface GetVideosParams {
//   type: 'animal' | 'animal-book' | 'bear-show'
//   episode: number | 'intro'
// }

const GetVideo = (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { type, episode },
  } = req;

  // Now, connect to S3, get video link, send back to client:
  res.json({
    to: 'do',
    type,
    episode,
  });
};

export default GetVideo;
