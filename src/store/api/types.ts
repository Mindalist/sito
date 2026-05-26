export type InstagramPost = {
  id: string;
  timestamp: string;
  permalink: string;
  mediaType: string;
  isReel: boolean;
  mediaUrl: string;
  thumbnailUrl: string;
  sizes?: {
    small?: {
      mediaUrl: string;
      height: number;
      width: number;
    };
    medium?: {
      mediaUrl: string;
      height: number;
      width: number;
    };
    large?: {
      mediaUrl: string;
      height: number;
      width: number;
    };
    full?: {
      mediaUrl: string;
      height: number;
      width: number;
    };
  };
  caption: string;
  prunedCaption: string;
  hashtags: string[];
  mentions: string[];
  colorPalette: {
    dominant: string;
    muted: string;
    mutedLight: string;
    mutedDark: string;
    vibrant: string;
    vibrantLight: string;
    vibrantDark: string;
  };
  missingVideoThumbnail?: boolean;
  isSharedToFeed: boolean;
};

export type InstagramProfile = {
  username: string;
  biography: string;
  profilePictureUrl: string;
  website: string | null;
  followersCount: number;
  followsCount: number;
  posts: InstagramPost[];
};

