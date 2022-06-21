import React from 'react';
import { FormattedMessage, intlShape } from '../../util/reactIntl';
import Decimal from 'decimal.js';
import { formatMoney } from '../../util/currency';
import { types as sdkTypes } from '../../util/sdkLoader';
import config from '../../config';
import {
  propTypes,
  LINE_ITEM_CUSTOMER_COMMISSION,
  LINE_ITEM_PROVIDER_COMMISSION,
} from '../../util/types';

import css from './BookingBreakdown.module.css';

const { Money } = sdkTypes;

/**
 * Calculates the total price in sub units for multiple line items.
 */
const lineItemsTotal = lineItems => {
  const amount = lineItems.reduce((total, item) => {
    return total.plus(item.lineTotal.amount);
  }, new Decimal(0));
  const currency = lineItems[0] ? lineItems[0].lineTotal.currency : config.currency;
  return new Money(amount, currency);
};

/**
 * Returns non-commission, reversal line items
 */
const nonCommissionReversalLineItems = (transaction, userRole) => {
  let lineItems = null;

  if (userRole === 'customer') {
    lineItems = transaction.attributes.lineItems.filter(
      item => item.code !== 'line-item/processing-fee' && item.reversal
    );
  } else if (userRole === 'provider') {
    lineItems = transaction.attributes.lineItems.filter(
      item => item.code !== 'line-item/transaction-fee' && item.reversal
    );
  }
  return lineItems;
};

const LineItemRefundMaybe = props => {
  const { transaction, userRole, intl } = props;

  // all non-commission, reversal line items
  const refundLineItems = nonCommissionReversalLineItems(transaction, userRole);

  const refund = lineItemsTotal(refundLineItems);

  console.log(refundLineItems);
  console.log(refund);

  const formattedRefund = refundLineItems.length > 0 ? formatMoney(intl, refund) : null;

  return formattedRefund ? (
    <div className={css.lineItem}>
      <span className={css.itemLabel}>
        <FormattedMessage id="BookingBreakdown.refund" />
      </span>
      <span className={css.itemValue}>{formattedRefund}</span>
    </div>
  ) : null;
};

LineItemRefundMaybe.propTypes = {
  transaction: propTypes.transaction.isRequired,
  intl: intlShape.isRequired,
};

export default LineItemRefundMaybe;
