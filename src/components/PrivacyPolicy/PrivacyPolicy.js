import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './PrivacyPolicy.module.css';

const PrivacyPolicy = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Last updated: March 14, 2022</p>
      <h2>Registrar</h2>

      <p>HOOPDAMENTALS, LLC</p>

      <h2>Use of personal details (purpose of register)</h2>
      <p>
        Personal details are collected to make communication and use of service possible.
        Details can be used for communication between service providers and users and also
        for direct communication between users. Some personal details are visible on the
        profile page of the user, but those details are voluntary (except name).
      </p>
      <p>
        The handling of personal details is not outsourced, but the register data is
        stored on a server that is rented from a third party company.
      </p>

      <h2>Information content of the register</h2>
      <div>
        The following information may be stored in the register:
        <ul>
          <li>Personal details: Name, email address, phone number, street address</li>
          <li>Account details: username, password (stored in encrypted format)</li>
          <li>The description text that the user may write about him/herself</li>
          <li>The offers and requests the user has posted to the service</li>
          <li>The given and received feedback and badges</li>
          <li>
            Statistical data about service usage, e.g. number times the user has logged in
          </li>
        </ul>
      </div>
      <h2>Regular sources of information</h2>
      <p>
        Personal details are given by the user on registration to the service or when
        using it later.
      </p>

      <h2>Regular handovers of the information</h2>
      <p>
        The information may be handed over for research purposes as described in the{' '}
        <a href="/terms-of-service">Terms of use</a> that the user accepts before starting
        to use the service. The researchers may not publish any research results so that
        identifying information would be revealed or that any specific user could be
        detected.
      </p>
      <p>
        Information considering users of a single HOOPDAMENTALS community may be handed
        over to the client who has founded that community or to the community
        administrators appointed by that client.
      </p>
      <h2>Register protection principles</h2>
      <p>
        The information is stored on computers. The access to the information is
        restricted with passwords and physical access to the computers is restricted by
        the server hosting company.
      </p>
    </div>
  );
};

PrivacyPolicy.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

PrivacyPolicy.propTypes = {
  rootClassName: string,
  className: string,
};

export default PrivacyPolicy;
