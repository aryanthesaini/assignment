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
      path: `/videos/stream`,
      method: 'get',
      handler: async (req, res, next) => {
        const data = await fetch(
          'https://assignment-2y3n.onrender.com/api/posts?where[category][equals]=stream'
        );
        const final = await data.json();
        if (final) {
          console.log(final);
          res.status(200).send(final);
        } else {
          res.status(404).send({ error: 'not found' });
        }
      },
    },
  ],
};

export default Posts;
