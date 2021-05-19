import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../components/container";
import PostBody from "../components/post-body";
import Header from "../components/header";
import PostHeader from "../components/post-header";
import SectionSeparator from "../components/section-separator";
import Layout from "../components/layout";
import { getPage, getAllProducts } from "../lib/api";
import PostTitle from "../components/post-title";
import Pricing from "../components/pricing";
import Contact from "../components/contact";

import Head from "next/head";

export default function Page({ page, preview, allProducts }) {
  const router = useRouter();
  if (!router.isFallback && !page?.slug) {
    return <ErrorPage statusCode={404} />;
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
                <title>{page.title} | Kalamata Olivenöl</title>
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
            <Pricing products={allProducts} />
            <SectionSeparator />
            <Contact />
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = null }) {
  const data = await getPage("index", preview ? true : false);
  const allProducts = await getAllProducts(data || "");
  return {
    props: {
      preview,
      page: {
        ...data?.page,
      },
      ...allProducts,
    },
  };
}
