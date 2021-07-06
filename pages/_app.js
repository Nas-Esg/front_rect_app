import React, { useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import "../styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import MainLayout from '../components/layouts/main'
import NavigatinoBar from "../components/navigation/navigationBar";



const MCP = ({Component, pageProps}) => {

  useEffect(()=>{
    AOS.init({
      duration : 1500
    })
  })
  return (
    <>
        <Head>
            <title>Movies Client Application</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content="" />
        </Head>
        <MainLayout>
            <NavigatinoBar />
            <Component {...pageProps} />
        </MainLayout>
        
    </>
        
  );
}

export default MCP;