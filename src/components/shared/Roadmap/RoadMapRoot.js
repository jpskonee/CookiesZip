import { Grid } from "@material-ui/core";
import React from "react";
import RoadMapItem from "./RoadMapItem";
import RoadMapTitle from "./RoadMapTitle";

function RoadMapRoot() {
  return (
    <div style={{ color: "white" }}>
      <Grid className="roadmap-root" container>
        <Grid className="roadmap-left" item sm={6} xs={12}>
          <RoadMapTitle title="ROADMAP" />
          <RoadMapItem
            title="NOVEMBER 2021"
            slogan="LAUNCH GEN 0 Cookies"
            body="Gen0 Is the original cookie that will be used for the Fortune Ecosystem. These fortunes will unlock the power of Soltar and will bless you with future fortunes"
          />
          <RoadMapItem
            title="DECEMBER 2021"
            slogan="OG Airdrop"
            body="Our OG’s have been with us since the beginning of time and for that we bless them with a beautiful collection of custom fortunes. These fortunes will be a collection on their own."
          />
          <RoadMapItem
            title="DECEMBER 2021"
            slogan="Bi Weekly Fortune Lotto Machine"
            body="Soltars powers will unlock bringing you new fortunes. Our first goal will be using the fortune treasury to buy a fine collection of partner NFT’s for you to acquire. Simply trade your fortune cookie to soltar and you will be blessed with beautiful artwork. WIll it be a ultrarare ape or a floor gecko? The gamble is yours to take! The fortune cookies collected in these swaps will also be used for future giveaways. "
          />
        </Grid>
        <Grid className="roadmap-right" item sm={6} xs={12}>
          <RoadMapTitle title="2022 GOALS" />

          <RoadMapItem
            title="Q1 2022"
            slogan="GEN 1 Release"
            body="Soltar has been hard at work since his last release and needs your fortunes to complete his recipes. Soltar will use your traits to generate a new NFT. Will it be a special PFP or a fun toy? Only time will tell."
          />
          <RoadMapItem
            title="Q2 2022"
            slogan="Soltar Marketplace"
            body="By now soltar has created lots of fortunes for you all to enjoy. We will be launching our marketplace for people to trade fortunes and upgrade there goods."
          />
          <RoadMapItem
            title="Q2 2022"
            slogan="Fortune Accessories"
            body="Soltar continues imagining the possibilities for his fortune partners and will be working on more fortune drops for his followers. Using the traits from Gen0 and Gen1 you will be able to mint accessories for your favorite Metaverse NFTS that will only be accessible to fortune holders."
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default RoadMapRoot;
