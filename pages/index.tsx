import { GetStaticProps } from "next"
import NextLink from "next/link"
import { useRouter } from "next/router"

export default function Home(props: any) {
  const router = useRouter()
  const targetLocale = router.locale === "en" ? "fr" : "en"

  return (
    <div style={{ display: "grid", gap: "1rem" }}>
      <NextLink href={router.asPath} locale={targetLocale} passHref>
        <a>Switch to {targetLocale}</a>
      </NextLink>
      <pre>props: {JSON.stringify(props, null, 2)}</pre>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => ({
  props: { foo: "bar" },
})
