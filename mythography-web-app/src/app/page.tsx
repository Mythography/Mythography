import { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from "@/components/mythography/Hero";
import SectionHeader from "@/components/mythography/SectionHeader";
import OurProducts from "@/components/mythography/OurProducts";
import OurValues from "@/components/mythography/OurValues";
import MeetTheCreator from "@/components/mythography/MeetTheCreator";
import ContactUs from "@/components/mythography/ContactUs";

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
                <SectionHeader title="Our Values"></SectionHeader>
                <OurValues></OurValues>
                <SectionHeader title="Meet the Creator"></SectionHeader>
                <MeetTheCreator></MeetTheCreator>
                <SectionHeader title="Contact Us"></SectionHeader>
                <ContactUs></ContactUs>
            </main>

            <Footer />
        </div>
    )
}

export default HomePage