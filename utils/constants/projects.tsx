import Project from '../../types/Project'

const PROJECTS: Project[] = [
  {
    name: 'GeoHub',
    imageUrl: '/images/geohub.webp',
    description: 'A free to play, open source geography guessing game. Can you guess where you are in the world?',
    tags: ['NextJS', 'TypeScript', 'MongoDB', 'Maps API'],
    githubLink: 'https://github.com/benlikescode/geohub',
    liveLink: 'https://geohub.vercel.app',
    redditLink: 'https://www.reddit.com/r/webdev/comments/146fxwj/i_created_geohub_my_own_version_of_the_game/',
  },
  {
    name: 'Discord Clone',
    imageUrl: '/images/bencord.webp',
    description:
      'A community based messaging app with many features such as realtime messaging, inviting friends, and voice chat.',
    tags: ['React', 'TypeScript', 'Firebase', 'Redux'],
    githubLink: 'https://github.com/benlikescode/discord',
  },
]

export default PROJECTS
