import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import client from '../../client'
import Layout from '../../components/Layout'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    youtube: ({ value }) => {
      const { url } = value
      const id = getYouTubeId(url)
      return <YouTube videoId={id} />
    },
    html: ({ value }) => {
      const { html } = value
      return <div dangerouslySetInnerHTML={{ __html: html }} />
    },

    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          className="rounded border shadow !mt-0 float-left mr-6 mb-6"
          src={urlFor(value).width(320).height(320).fit('scale')}
        />
      )
    },
  },
}

const Post = ({ post }) => {
  if (!post) return null
  const {
    title = 'Missing title',
    name = 'Missing name',
    excerpt,
    body = [],
    mainImage,
    publishedAt,
  } = post

  const metaData = {
    title,
    description: excerpt,
    image: mainImage
      ? urlFor(mainImage).width(320).height(240).fit('max').auto('format')
      : null,
  }

  return (
    <Layout metaData={metaData}>
      <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <article>
            <div className="mb-4">
              <h1 className="text-2xl font-display">{title}</h1>
              <p className="blog-date">
                <time dateTime={publishedAt}>
                  {new Date(publishedAt).toLocaleDateString(undefined, {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </p>
            </div>

            <div className="prose">
              <PortableText value={body} components={ptComponents} />
            </div>
          </article>
        </div>
      </div>
    </Layout>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  mainImage,
  publishedAt,
  excerpt,
  body
}`
export async function getStaticPaths() {
  const posts = await client.fetch(`*[_type == "post"]{slug}`)
  const paths = posts.map((post) => ({
    params: { slug: post.slug.current },
  }))
  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.params
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post,
    },
  }
}

export default Post
