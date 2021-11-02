import type { NextApiRequest, NextApiResponse } from 'next';
import { getContentByFileName } from 'utils/files';
import type { Content } from 'utils/types';

const Project = (
  req: NextApiRequest,
  res: NextApiResponse<Content>
) => {
  const { contentInfo, markdownBody } = getContentByFileName('projects', 'spa', req.query.code)
  res.status(200).json({ contentInfo, markdownBody })
};

export default Project;