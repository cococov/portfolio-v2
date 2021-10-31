import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { NextApiRequest, NextApiResponse } from 'next';

const root = process.cwd();

type Data = {
  frontMatter: any,
  markdownBody: string
}

const getPostBySlug = (dataType: string, language: string, slug: string | string[]) => {
  const source = fs.readFileSync(path.join(root, 'database', dataType, language, `${slug}.md`), 'utf8');

  const { data, content } = matter(source);

  return {
    frontMatter: data,
    markdownBody: content,
  };
};

const Project = (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { frontMatter, markdownBody } = getPostBySlug('projects', 'spa', req.query.code)
  res.status(200).json({ frontMatter, markdownBody  })
};

export default Project;