import React from "react";
import { EducationContainer } from "../../components/EducationContainer";
import { SkillsContainer } from "../../components/SkillsContainer";
import { TestimonialsContainer } from "../../components/TestimonialsContainer";
import { ServicesContainer } from "../../components/ServicesContainer";
import { ProjectsContainer } from "../../components/ProjectsContainer";
import { ContactContainer } from "../../components/ContactContainer";
import { HeaderSection } from "../../components/HeaderSection";

export const Main = ({ refs }) => {
  const { homeRef, educationRef, skillsRef, projectsRef, contactRef } = refs;

  return (
    <>
      <div ref={homeRef}>
        <HeaderSection />
      </div>
      <div ref={educationRef}>
        <EducationContainer />
      </div>
      <div ref={skillsRef}>
        <SkillsContainer />
      </div>
      <div ref={projectsRef}>
        <ProjectsContainer />
      </div>
      <div ref={contactRef}>
        <ContactContainer />
      </div>
    </>
  );
};
