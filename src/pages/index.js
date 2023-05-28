import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";
//   Section,Animation,
export default function IndexPage() {
  return (
    <>
      <Seo title="Portfolio - André Despouys Pascual" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me 😁" />
        <InterestsSection sectionId="details" heading="My skills stack 🦾" />
        <ProjectsSection sectionId="learning" heading="My current learning path 🤓" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles Written 📝" sources={['Medium']} /> */}
        <ContactSection sectionId="github" heading="Not bad right?" />
      </Page>
    </>
  );
}
