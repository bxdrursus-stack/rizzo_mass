import backgroundSprLarge from 'assets/bg.png';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';

import backgroundSpr from 'assets/bg.png';



import imageSprLessonBuilderDarkLarge from 'assets/astravoice.png';
import imageSprLessonBuilderDarkPlaceholder from 'assets/astravoice.png';
import imageSprLessonBuilderDark from 'assets/astravoice.png';


import imageSprLessonBuilderLightLarge from 'assets/spr-lesson-builder-light-large.jpg';
import imageSprLessonBuilderLightPlaceholder from 'assets/spr-lesson-builder-light-placeholder.jpg';
import imageSprLessonBuilderLight from 'assets/spr-lesson-builder-light.jpg';
import { Footer } from 'components/Footer';
import { Link } from 'components/Link';
import { Meta } from 'components/Meta';

import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';



const title = 'Astra Voice';
const description =
  'Never lose a customer again. Experience innovative AI customer support.';
const roles = [
  'Voice-based interactions',
  'Emotion Recognition',
  'Remembers past users',
];

export const SmartSparrow = () => {
  const { themeId } = useTheme();

  const isDark = themeId === 'dark';



  return (
    <Fragment>
      <ProjectContainer className="spr">
        <Meta title={title} prefix="Projects" description={description} />
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr.src} 1080w, ${backgroundSprLarge.src} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://astravoice.co/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprLessonBuilderDark, imageSprLessonBuilderDarkLarge]
                  : [imageSprLessonBuilderLight, imageSprLessonBuilderLightLarge]
              }
              placeholder={
                isDark
                  ? imageSprLessonBuilderDarkPlaceholder
                  : imageSprLessonBuilderLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="A screenshot of the current ui of the app"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          
          <ProjectTextRow>
            <ProjectSectionHeading>As Seen On:</ProjectSectionHeading>
            <Link href="https://www.digitaljournal.com/pr/news/vehement-media/astra-voice-future-customer-support-1269680948.html"> Digital Journal</Link>
           
           </ProjectTextRow>
        </ProjectSection>

    
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
