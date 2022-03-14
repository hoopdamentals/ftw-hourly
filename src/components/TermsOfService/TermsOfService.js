import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './TermsOfService.module.css';

const TermsOfService = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
    <p className={css.lastUpdated}>Last updated: March 14, 2022</p>    

    <p>
      Hoopdamentals is a service that allows its users to change favors and items and
      communicate with each other. The service may only be used in accordance with these
      terms of use. The service provider reserves the right to change these terms of use
      if required. Valid terms of use can be found on app.hoopdamentals.com Terms of use
      section.
    </p>

    <h2>Rights of Content</h2>
    <p>
      The users themselves retain the right to all text, pictures and other content that
      they create in the service. The users allow others to utilize the content in
      accordance with the nature of the service and furthermore allow the service
      provider to file information and data and make changes that are necessary for the
      service or the study, however other rights are not transferred from the users,
      unless specifically otherwise agreed. The responsibility of the content lies with
      the user, who has produced it to the service. The service provider has the right
      to remove any material when it deems it necessary.
    </p>

    <h2>
      The Site is a Venue and We are Not a Party to any Rental Agreement or other
      Transaction Between Users of the Site.
    </h2>
    <p>
      We urge all users to be responsible about their use of this Site and any
      transaction entered into as a result of either listing a gymnasium or renting a
      gymnasium. We do not own or manage, nor can we contract for, any gymnasium listed
      on this Site. The Site provides an on-line marketplace to allow the owner or a
      property manager or duly authorized agent of the owner of a gymnasium to offer for
      rent on this Site a specific gymnasium to potential renters or renters. We are not
      a party to any rental or other agreement between users. You acknowledge and agree
      that you may be required to enter into one or more separate agreements, waivers or
      terms and conditions before renting a gymnasium.
    </p>

    <p>
      Users agree that they are responsible for and agree to abide by all laws, rules,
      ordinances, or regulations applicable to the listing or renting of a gymnasium,
      including but not limited to any and all laws, rules, ordinances, regulations or
      other requirements relating to taxes, credit cards, data and privacy, permits or
      license requirements, zoning ordinances, safety compliance and compliance with all
      anti-discrimination and fair housing laws, as applicable. Please be aware that,
      even though we are not a party to any rental transaction and assume no liability
      for legal or regulatory compliance pertaining to rental gymnasiums listed on the
      Site, there may be circumstances where we are nevertheless legally obligated (as
      we may determine in our sole discretion) to provide information relating to your
      listing in order to comply with requests from governmental bodies in relation to
      investigations, litigation or administrative proceedings, and we may choose to
      comply with such obligations in our sole discretion.
    </p>

    <h2>Disclaimer</h2>
    <p>
      No guarantees of the functioning of the Hoopdamentals service are given. The users
      are themselves responsible for their actions in the service and they should
      estimate the reliability of other users before dealing with them. The service
      provider can under no circumstances be liable for damage that is caused to the
      user. The user may not store any information or data in the service, and expect it
      to remain there.
    </p>

    <h2>The Removal of a User</h2>
    <p>
      The service provider has the right to remove any users from Hoopdamentals and
      terminate their right of use of the service without any specific reason and
      without being liable for compensation.
    </p>

    <h2>Applicable Jurisdiction</h2>
    <p>
      The jurisdiction that is applicable in this service and these terms of use is that
      of Tennessee, unless something else is required by binding law.
    </p>
  </div>
  );
};

TermsOfService.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

TermsOfService.propTypes = {
  rootClassName: string,
  className: string,
};

export default TermsOfService;
