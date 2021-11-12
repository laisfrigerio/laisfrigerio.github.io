const fs = require('fs');
const grayMatter =  require('gray-matter');
const remarkHTML =  require('remark-html');
const remark =  require('remark');

module.exports.getOnePostByFilename = function (filename) {
  filename = filename.substr(2);

  const fileContent = fs.readFileSync(`./posts/${filename}`, 'utf-8');
  const { content, data: metadata } = grayMatter(fileContent);
  const htmlContent = remark()
    .use(remarkHTML)
    .processSync(content)
    .toString();

  const post = {
    metadata: {
      ...metadata,
      slug: filename.replace('.md', ''),
    },
    content: htmlContent
  }

  return post;
}

module.exports.getAllPosts = function () {
  const allPostsFileNames = fs.readdirSync('./posts');

  const posts = allPostsFileNames.map((filename) => {
    return getOnePostByFilename(filename);
  });

  return posts;
}
