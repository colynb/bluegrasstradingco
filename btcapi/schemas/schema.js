import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

export default createSchema({
  name: 'AppSchema',
  types: schemaTypes.concat([
    {
      title: 'FAQ',
      name: 'faq',
      type: 'document',
      fields: [
        {
          title: 'Question',
          name: 'question',
          type: 'string',
        },
        {
          title: 'Answer',
          name: 'answer',
          type: 'text',
        },
      ],
    },
    {
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
    },
    {
      title: 'Player',
      name: 'player',
      type: 'document',
      fields: [
        {
          title: 'Name',
          name: 'name',
          type: 'string',
        },
        {
          title: 'Series Number',
          name: 'series_number',
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
          title: 'Artist',
          name: 'artist',
          type: 'reference',
          to: { type: 'artist' },
        },
        {
          title: 'Image URL',
          name: 'imageUrl',
          type: 'url',
        },
        {
          title: 'Limited',
          name: 'limited',
          type: 'boolean',
        },
        {
          title: 'Featured',
          name: 'featured',
          type: 'boolean',
        },
      ],
      preview: {
        select: {
          title: 'name',
          subtitle: 'series_number',
        },
        prepare(selection) {
          const { title, subtitle } = selection
          return {
            title: `${subtitle} - ${title}`,
            subtitle: null,
          }
        },
      },
      orderings: [
        {
          title: 'Series Number, Asc',
          name: 'series_number_asc',
          by: [{ field: 'series_number', direction: 'asc' }],
        },
      ],
    },
  ]),
})
