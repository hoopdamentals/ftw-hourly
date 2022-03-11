import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.module.css';
import image from './about-us-1056.jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About HoopDaMentals',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Basketball Community Marketplace</h1>
          <img className={css.coverImage} src={image} alt="istock youth photo" />

          <div className={css.contentWrapper}>           
            <div className={css.contentMain}>             
              <p>
              Hoopdamentals is a place to connect with people that can help improve your(or your child's) basketball skills.
              </p>
              
              <p>
              Whether you need a trainer to help improve your ball handling, your shot, a videographer to record a game or scrimmage, an IQ coach to minimize mistakes or you just need to rent a gym for a couple of hours, Hoopdamentals can help!!!
              </p>        
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
