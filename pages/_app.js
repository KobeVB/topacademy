import '../styles/globals.css'

import { storyblokInit, apiPlugin } from "@storyblok/react";

import { useEffect } from 'react'
import { useRouter } from 'next/router'


import Person from "../components/specificComponents/Person/Person";
import Teacher from "../components/specificComponents/Teacher/Teacher";
import Experience from '../components/specificComponents/Experience/Experience';
import Hero from '../components/genericComponents/Hero/Hero';
import Page from '../components/layoutComponents/Page/Page';
import Headermenu from '../components/genericComponents/Headermenu/Headermenu';
import Menulink from '../components/genericComponents/Menulink/Menulink';
import Paragraph from '../components/genericComponents/Paragraph/Paragraph';
import Intro from '../components/genericComponents/Intro/Intro';
import LeftRightBlock from '../components/genericComponents/LeftRightBlock/LeftRightBlock';
import Course from '../components/specificComponents/Course/Course';
import List from '../components/genericComponents/List/List';
import Element from '../components/genericComponents/Element/Element';
import OneCol from '../components/layoutComponents/OneCol/OneCol';
import TwoCol from '../components/layoutComponents/TwoCol/TwoCol';
import ThreeCol from '../components/layoutComponents/ThreeCol/ThreeCol';
import ImageCarousel from '../components/genericComponents/ImageCarousel/ImageCarousel';
import Product from '../components/specificComponents/Product/Product';
import Location from '../components/specificComponents/Location/Location';
import Artist from '../components/specificComponents/Artist/Artist';
import Album from '../components/specificComponents/Album/Album';


const components = {
  person: Teacher,
  experience: Experience,
  hero: Hero,
  page: Page,
  headermenu: Headermenu,
  menulink: Menulink,
  paragraph: Paragraph,
  intro: Intro,
  leftrightblock: LeftRightBlock,
  course: Course,
  list: List,
  element: Element,
  onecol: OneCol,
  twocol: TwoCol,
  threecol: ThreeCol,
  imagecarousel: ImageCarousel,
  product: Product,
  location: Location,
  artist: Artist,
  album: Album
};

storyblokInit({
  accessToken: `${process.env.STORYBLOK_API_KEY}`,
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  //on routechange we log a google pageview
  useEffect(() => {
    //on routechange we log a google pageview
    const handleRouteChange = (url) => {
      //ga.pageview(url)
    }
    //


    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return <Component {...pageProps} />;
}

export default MyApp;
