type Project = {
  name: string
  imageUrl: string
  description: string
  tags: string[]
  links: {
    type: 'reddit' | 'github' | 'web'
    url: string
  }[]
  button: {
    label: string
    url: string
  }
}

export default Project
