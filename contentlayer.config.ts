import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files';

const Image = defineNestedType(() => ({
  name: 'Image',
  fields: {
    src: { type: 'string', required: true },
    width: { type: 'number', required: true },
    height: { type: 'number', required: true },
    blurred: { type: 'string', required: true },
  },
}));
const Artist = defineNestedType(() => ({
  name: 'Artist',
  fields: {
    name: { type: 'string', required: true },
    image: { type: 'nested', of: Image, required: true },
  },
}));
const Hero = defineNestedType(() => ({
  name: 'Hero',
  fields: {
    small: { type: 'nested', of: Image, required: true },
    large: { type: 'nested', of: Image, required: true },
  },
}));

// export const Painting = defineDocumentType(() => {
//   const date = new Date();
//   const defaultTimestamp = date.getTime();
//   return {
//     name: 'Painting',
//     filePathPattern: `**/*.mdx`,
//     contentType: 'mdx',
//     fields: {
//       publishTimestamp: { type: 'number', default: defaultTimestamp },
//       title: { type: 'string', required: true },
//       year: { type: 'string', required: true },
//       source: { type: 'string', required: true },
//       artist: { type: 'nested', of: Artist, required: true },
//       hero: { type: 'nested', of: Hero, required: true },
//       thumbnail: {
//         type: 'nested',
//         of: Image,
//         required: true,
//       },
//       gallery: {
//         type: 'nested',
//         of: Image,
//         required: true,
//       },
//     },
//     computedFields: {
//       url: {
//         type: 'string',
//         resolve: (painting) => `paintings/${painting._raw.flattenedPath}`,
//       },
//     },
//   };
// });

const getTimestamp = () => {
  const date = new Date();
  return date.getTime();
};
export const Project = defineDocumentType(() => {
  const defaultTimestamp = getTimestamp();

  return {
    name: 'Post',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
      publishTimestamp: { type: 'number', default: defaultTimestamp },
      title: { type: 'string', required: true },
    },
    computedFields: {
      url: {
        type: 'string',
        resolve: (project) => `posts/${project._raw.flattenedPath}`,
      },
    },
  };
});

export const Post = defineDocumentType(() => {
  const defaultTimestamp = getTimestamp();

  return {
    name: 'Post',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
      publishTimestamp: { type: 'number', default: defaultTimestamp },
      title: { type: 'string', required: true },
      year: { type: 'string', required: true },
      source: { type: 'string', required: true },
      artist: { type: 'nested', of: Artist, required: true },
      hero: { type: 'nested', of: Hero, required: true },
      thumbnail: {
        type: 'nested',
        of: Image,
        required: true,
      },
    },
    computedFields: {
      url: {
        type: 'string',
        resolve: (post) => `posts/${post._raw.flattenedPath}`,
      },
    },
  };
});

export default makeSource({
  contentDirPath: 'content',
  contentDirInclude: ['projects', 'posts'],
  documentTypes: [Project, Post],
});
