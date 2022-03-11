export default {
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
}
