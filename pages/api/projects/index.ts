import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllProjectsInfo } from 'utils/content'
import { ProjectInfo } from 'utils/types'

const Projects = (
  req: NextApiRequest,
  res: NextApiResponse<ProjectInfo[]>
) => {
  res.status(200).json(getAllProjectsInfo('spa'));
}

export default Projects;