import '@/styles/globals.css';
import Layout from "@/components/layout/Layout";

export default function App({ Component, pageProps }) {
  return (

    <Layout>

      <main>
        <Component {...pageProps} />
      </main>

    </Layout>

  ) 
}
