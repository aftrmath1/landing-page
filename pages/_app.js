import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}


export default MyApp
