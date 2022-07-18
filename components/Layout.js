import React from "react";
import Head from "next/head";
import Header from "./Header";
const Layout = ({ children, ...rest }) => {
  return (
    <>
      <Head>
        <title>Wordle Scores</title>
        <meta
          name="description"
          content="Save your Wordle scores and share with friends"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
