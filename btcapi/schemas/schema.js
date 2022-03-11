import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import artist from './artist'
import player from './player'
import youtube from './youtube'
import html from './html'

export default createSchema({
  name: 'AppSchema',
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    artist,
    player,
    post,
    author,
    category,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    youtube,
    html,
  ]),
})
