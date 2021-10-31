import type { NextApiRequest, NextApiResponse } from 'next'
import projects from 'database/projects/projects.json'

type ProjectInfo = {
  name: string,
  ico: string,
  icoType: string
}

type Data = {
  [key: string]: ProjectInfo
}

const Projects = (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  res.status(200).json(projects);
}

export default Projects;