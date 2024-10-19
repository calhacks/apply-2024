import { FilloutFullScreenEmbed } from "@fillout/react";
import Head from "next/head";

function App() {
  let description = `Vote at Cal Hacks 11.0!`
  let image = null
  return (
    <>
      <Head>
        <meta key="og_locale" property="og:locale" content="en_US" />
        <meta key="og_type" property="og:type" content="website" />
        <meta key="tw_site" name="twitter:site" content="@calhacks" />
        <title key="title">Cal Hacks 11.0 Voting Portal</title>
        <meta key="og_title" property="og:title" content={"Cal Hacks 11.0 Voting Portal"} />
        <meta
          key="tw_title"
          name="twitter:title"
          content={"Cal Hacks 11.0 Voting Portal"}
        />
        {description && (
          <>
            <meta key="desc" name="description" content={description} />
            <meta key="og_desc" property="og:description" content={description} />
            <meta key="tw_desc" name="twitter:description" content={description} />
          </>
        )}
        {image && (
          <>
            <meta key="og_img" property="og:image" content={image} />
            <meta key="tw_card" name="twitter:card" content="summary_large_image" />
            <meta key="tw_img" name="twitter:image" content={image} />
          </>
        )}
        <link rel="shortcut icon" href="https://calhacks-sierra.s3-us-west-2.amazonaws.com/assets/branding/favicon.ico" />
      </Head>
      <FilloutFullScreenEmbed filloutId="sKkcH2XECsus" inheritParameters />
    </>
  );
}

export default App;
