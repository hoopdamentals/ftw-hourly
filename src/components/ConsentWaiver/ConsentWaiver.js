import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './ConsentWaiver.module.css';

const ConsentWaiver = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
    <p className={css.lastUpdated}>Last updated: November 13, 2022</p>    

    <p>
      I request authorization for my child(ren) to participate in this certain optional 
      fitness program, class, and activity, including, but not necessarily limited to, 
      group fitness or one on one training session or group session for athletes (“Training Session"). 
      I acknowledge that the use of the gym or location (the "Location") and participation in the 
      Training Session is expressly conditioned on my agreement to each of the terms of this document. 
      I acknowledge and agree as follows:
    </p>

    <p>
      Use of the Location and participation in the Training Session involve physical exercise, 
      sport and recreational activities that may cause injury.  I understand that there is an 
      inherent risk of injury to my child(ren) by participating in this Training Session in the Location. 
      My child(ren)'s use of the Location and participation in the Training Session is a voluntary activity 
      in all respects and I assume all risks of injury and illness that may result to them from such use 
      and participation. In return for the benefits my child(ren) will receive from participation and use 
      of the Location, I agree not to sue and hereby release and agree to hold harmless the owner of the 
      Location, the organizer of the Training Session and Hoopdamentals, LLC and their respective employees, 
      members, owners, officers, directors, agents and volunteers (collectively, the "Released Parties") for 
      and from liability and responsibility for any loss, injury, including, but not limited to death, connected 
      with my child(ren)'s participating in such Training Session and use of the Location. This is a complete 
      an irrevocable release and waiver of liability.
    </p>

    <p>
      In the event of an emergency, I authorize the Released Parties to secure from any licensed hospital, 
      physician, and/or medical personnel any treatment deemed necessary for my child(ren)'s immediate care 
      and agree that I will be responsible for payment of any and all medical services rendered. 
    </p>

    <p>
      I understand and agree that my child(ren) must adhere to the policy and rules set forth in the Location 
      and by the organizer of the Training Session.  I understand and agree that my child(ren)'s failure to 
      abide by the rules and directives while using the gym or participating in any Training Session may result 
      in the termination of my participation. 
    </p>
    
    <p>
      I understand that the Released Parties are not responsible for any loss or theft of personal property 
      brought to or left in Location and release and hold the Released Parties harmless from any liability 
      for such a loss or theft.
    </p>

    <p>
      I agree that the Released Parties have the right to use the name, image and likeness of my child(ren) 
      and that any pictures taken may be used for future promotions for the league.
    </p>

    <p>
      I have read this waiver and fully understand each of the terms, conditions and release of liability 
      set forth above.  I am aware that this is a release of liability, hold harmless agreement, an assumption 
      of risk agreement and permission to secure medical treatment and name, image and likeness release.  I further 
      understand that this is a legally binding contract between the Released Parties and myself.  I further 
      understand that this release is binding on my heirs, children, personal representatives and anyone else 
      entitled to act on my behalf.  I sign of my own free will.  I am 18 years of age or older. 
    </p>
  </div>
  );
};

ConsentWaiver.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

ConsentWaiver.propTypes = {
  rootClassName: string,
  className: string,
};

export default ConsentWaiver;
