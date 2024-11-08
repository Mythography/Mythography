import { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from "@/components/mythography/Hero";
import SectionHeader from "@/components/mythography/SectionHeader";
import OurProducts from "@/components/mythography/OurProducts";

const HomePage: NextPage = () => {
    return (
        <div className="min-h-screen">
            <Head>
                <title>Mythography</title>
                <meta name="description" content="Mythography Application Support Suite" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main>
                <Hero></Hero>
                <SectionHeader title="Our Products"></SectionHeader>
                <OurProducts></OurProducts>
            </main>

            <Footer />
        </div>
    )
}

export default HomePage