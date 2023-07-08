import Project from '../../types/Project'

const PROJECTS: Project[] = [
  {
    name: 'GeoHub',
    imageUrl: '/images/geohub.webp',
    description: 'A free to play, open source geography guessing game. Can you guess where you are in the world?',
    tags: ['NextJS', 'TypeScript', 'MongoDB', 'Maps API'],
    links: [
      {
        type: 'github',
        url: 'https://github.com/benlikescode/geohub',
      },
      {
        type: 'reddit',
        url: 'https://www.reddit.com/r/webdev/comments/146fxwj/i_created_geohub_my_own_version_of_the_game/',
      },
      {
        type: 'web',
        url: 'https://geohub.vercel.app',
      },
    ],
    button: {
      label: 'View on Web',
      url: 'https://geohub.vercel.app',
    },
  },
  {
    name: 'Discord Clone',
    imageUrl: '/images/bencord.webp',
    description: 'A community based messaging app with many features such as realtime messaging & voice chat',
    tags: ['React', 'TypeScript', 'Firebase', 'Redux'],
    links: [
      {
        type: 'github',
        url: 'https://github.com/benlikescode/discord',
      },
    ],
    button: {
      label: 'Open GitHub Repo',
      url: 'https://github.com/benlikescode/discord',
    },
  },
]

export default PROJECTS