import { CollectionConfig } from 'payload/types';

const Posts: CollectionConfig = {
  slug: 'posts',
  access: {
    create: () => true,
    read: () => true,
  },

  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'category',
      type: 'radio',
      options: [
        // required
        {
          label: 'Image',
          value: 'image',
        },
        {
          label: 'Video',
          value: 'video',
        },
        {
          label: 'Short Video',
          value: 'stream',
        },
      ],
    },
    {
      name: 'upload',
      type: 'relationship',
      relationTo: ['media'],
    },
  ],

  endpoints: [
    {
      path: `/posts/videos/stream`,
      method: 'get',
      handler: (req, res, next) => {
        res.status(200).send('Okay');
        // const tracking = await fetch(
        //   'http://localhost:3000/api/posts?where[category][equals]=stream'
        // );
        // if (tracking) {
        //   res.status(200).send({ tracking });
        // } else {
        //   res.status(404).send({ error: 'not found' });
        // }
      },
    },
  ],
};

export default Posts;
