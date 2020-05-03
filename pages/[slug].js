import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../components/container'
import PostBody from '../components/post-body'
import Header from '../components/header'
import PostHeader from '../components/post-header'
import SectionSeparator from '../components/section-separator'
import Layout from '../components/layout'
import { getAllPagesWithSlug , getPage} from '../lib/api'
import PostTitle from '../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import markdownToHtml from '../lib/markdownToHtml'

export default function Page({ page, preview }) {
  const router = useRouter()
  if (!router.isFallback && !page?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {page.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                <meta property="og:image" content={page.ogImage.url} />
              </Head>
              <PostHeader
                title={page.title}
                coverImage={page.coverImage}
                date={page.date}
                author={page.author}
              />
              <PostBody content={page.content} />
            </article>
            <SectionSeparator />
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = null }) {
  const data = await getPage(params.slug, preview ? true : false )
  const content = await markdownToHtml(data?.page?.content || '')

  return {
    props: {
      preview,
      page: {
        ...data?.page,
        content,
      }     
    },
  }
}

export async function getStaticPaths() {
  const allPages = await getAllPagesWithSlug()
  return {
    paths: allPages?.map(page => `/${page.slug}`) || [],
    fallback: true,
  }
}
