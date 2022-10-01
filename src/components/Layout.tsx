import Head from "next/head"
import Footer from "../sections/Footer"
import Header from '../sections/Header'

interface LayoutProps {
  children?: any
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Next Taillwingd Theme</title>
        <meta name="description" content="Create dark mode in next and tailwind" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
