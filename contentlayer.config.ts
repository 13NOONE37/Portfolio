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

const ArtImage = defineNestedType(() => ({
  name: 'ArtImage',
  fields: {
    mobile: { type: 'nested', of: Image },
    tablet: { type: 'nested', of: Image },
    desktop: { type: 'nested', of: Image },
  },
}));

export const Project = defineDocumentType(() => {
  return {
    name: 'Project',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
      publishAt: { type: 'date', required: true },
      pinned: { type: 'boolean' },
      title: { type: 'string', required: true },
      description: { type: 'string', required: true },
      source: { type: 'string' },
      tags: { type: 'list', of: { type: 'string' } },
      live: { type: 'string' },
      thumbnail: { type: 'nested', of: Image, required: true },
    },
    computedFields: {
      slug: {
        type: 'string',
        resolve: (project) => project._raw.flattenedPath.split('_')[1],
      },
      locale: {
        type: 'string',
        resolve: (project) =>
          project._raw.flattenedPath.split('_')[0].split('/')[1],
      },
    },
  };
});
export const Attachment = defineDocumentType(() => {
  return {
    name: 'Attachment',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {},
    computedFields: {
      name: {
        type: 'string',
        resolve: (attachment) => attachment._raw.flattenedPath.split('/')[1],
      },
      locale: {
        type: 'string',
        resolve: (attachment) =>
          attachment._raw.flattenedPath.split('_')[0].split('/')[1],
      },
    },
  };
});

export default makeSource({
  contentDirPath: 'content',
  contentDirInclude: [
    'projects',
    'attachments',
    // , 'posts'
  ],
  documentTypes: [
    Project,
    Attachment,
    // , Post
  ],
});
