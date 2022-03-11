export default {
  title: 'Artist',
  name: 'artist',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Location',
      name: 'location',
      type: 'string',
    },
    {
      title: 'Bio',
      name: 'bio',
      type: 'text',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    },
    {
      title: 'Players',
      name: 'players',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'player' }],
        },
      ],
    },
    {
      title: 'Image URL',
      name: 'imageUrl',
      type: 'url',
    },
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [
        {
          title: 'Link',
          name: 'link',
          type: 'object',
          fields: [
            { name: 'url', type: 'url', title: 'URL' },
            {
              name: 'type',
              type: 'string',
              title: 'Type',
              options: {
                list: [
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'Other', value: 'order' },
                ],
              },
            },
            { name: 'label', type: 'string', title: 'Label' },
          ],
        },
      ],
    },
  ],
}
