import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import classNames from 'classnames';
import { twitterPageURL } from '../../util/urlHelpers';
import config from '../../config';
import {
  IconSocialMediaFacebook,
  IconSocialMediaInstagram,
  IconSocialMediaTwitter,
  Logo,
  ExternalLink,
  NamedLink,
} from '../../components';

import css from './Footer.module.css';

const renderSocialMediaLinks = intl => {
  const { siteFacebookPage, siteInstagramPage, siteTwitterHandle } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  const goToFb = intl.formatMessage({ id: 'Footer.goToFacebook' });
  const goToInsta = intl.formatMessage({ id: 'Footer.goToInstagram' });
  const goToTwitter = intl.formatMessage({ id: 'Footer.goToTwitter' });

  const fbLink = siteFacebookPage ? (
    <ExternalLink key="linkToFacebook" href={siteFacebookPage} className={css.icon} title={goToFb}>
      <IconSocialMediaFacebook />
    </ExternalLink>
  ) : null;

  const twitterLink = siteTwitterPage ? (
    <ExternalLink
      key="linkToTwitter"
      href={siteTwitterPage}
      className={css.icon}
      title={goToTwitter}
    >
      <IconSocialMediaTwitter />
    </ExternalLink>
  ) : null;

  const instragramLink = siteInstagramPage ? (
    <ExternalLink
      key="linkToInstagram"
      href={siteInstagramPage}
      className={css.icon}
      title={goToInsta}
    >
      <IconSocialMediaInstagram />
    </ExternalLink>
  ) : null;
  return [fbLink, twitterLink, instragramLink].filter(v => v != null);
};

const Footer = props => {
  const { rootClassName, className, intl } = props;
  const socialMediaLinks = renderSocialMediaLinks(intl);
  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.topBorderWrapper}>
        <div className={css.content}>
          <div className={css.someLiksMobile}>{socialMediaLinks}</div>
          <div className={css.links}>
            <div className={css.infoLinks}>
              <ul className={css.list}>
                <li className={css.listItem}>
                  <ExternalLink className={css.link} href={'https://www.hoopdamentals.com/'}>
                    <FormattedMessage id="Footer.toAboutPage" />
                  </ExternalLink>
                </li>
                <li className={css.listItem}>
                  <ExternalLink
                    className={css.link}
                    href={'https://www.hoopdamentals.com/faq-members'}
                  >
                    <FormattedMessage id="Footer.toFAQPage" />
                  </ExternalLink>
                </li>
                <li className={css.listItem}>
                  <ExternalLink
                    className={css.link}
                    href={'https://www.hoopdamentals.com/help-coaches'}
                  >
                    <FormattedMessage id="Footer.toCoachHelpPage" />
                  </ExternalLink>
                </li>
                <li className={css.listItem}>
                  <ExternalLink
                    className={css.link}
                    href={'https://www.hoopdamentals.com/help-athletes'}
                  >
                    <FormattedMessage id="Footer.toParentHelpPage" />
                  </ExternalLink>
                </li>
                <li className={css.listItem}>
                  <ExternalLink className={css.link} href={'https://www.hoopdamentals.com/'}>
                    <FormattedMessage id="Footer.toContactPage" />
                  </ExternalLink>
                </li>
              </ul>
            </div>
            <div className={css.extraLinks}>
              <div className={css.legalMatters}>
                <ul className={css.tosAndPrivacy}>
                  <li>
                    <ExternalLink
                      className={css.legalLink}
                      href={'https://www.hoopdamentals.com/terms'}
                    >
                      <FormattedMessage id="Footer.termsOfUse" />
                    </ExternalLink>
                  </li>
                  <li>
                    <ExternalLink
                      className={css.legalLink}
                      href={'https://www.hoopdamentals.com/privacy-policy'}
                    >
                      <FormattedMessage id="Footer.privacyPolicy" />
                    </ExternalLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={css.copyrightAndTermsMobile}>
            <div className={css.tosAndPrivacyMobile}>
              <NamedLink name="PrivacyPolicyPage" className={css.privacy}>
                <FormattedMessage id="Footer.privacy" />
              </NamedLink>
              <NamedLink name="TermsOfServicePage" className={css.terms}>
                <FormattedMessage id="Footer.terms" />
              </NamedLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.defaultProps = {
  rootClassName: null,
  className: null,
};

Footer.propTypes = {
  rootClassName: string,
  className: string,
  intl: intlShape.isRequired,
};

export default injectIntl(Footer);
