import Head from 'next/head'
import Header from "../components/Header";
import Baner from "../components/Baner";

function Home() {
  return (
    <div>
      <Head>
        <title>React Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="bg-baner-bg h-[700px] bg-bottom bg-cover">
            <Header />
            <Baner />
        </div>




    </div>
  )
}

export default Home
