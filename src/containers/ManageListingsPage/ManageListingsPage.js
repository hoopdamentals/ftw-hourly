import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import { propTypes } from '../../util/types';

import { isScrollingDisabled } from '../../ducks/UI.duck';

import {
  ManageListingCard,
  Page,
  PaginationLinks,
  UserNav,
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  NamedLink,
  PrimaryButton,
} from '../../components';
import { TopbarContainer } from '../../containers';
import routeConfiguration from '../../routeConfiguration';

import { closeListing, openListing, getOwnListingsById } from './ManageListingsPage.duck';
import css from './ManageListingsPage.module.css';

export class ManageListingsPageComponent extends Component {
  constructor(props) {
    super(props);

    this.state = { listingMenuOpen: null };
    this.onToggleMenu = this.onToggleMenu.bind(this);
  }

  onToggleMenu(listing) {
    this.setState({ listingMenuOpen: listing });
  }

  render() {
    const {
      closingListing,
      closingListingError,
      listings,
      onCloseListing,
      onOpenListing,
      openingListing,
      openingListingError,
      pagination,
      queryInProgress,
      queryListingsError,
      queryParams,
      scrollingDisabled,
      intl,
    } = this.props;

    const hasPaginationInfo = !!pagination && pagination.totalItems != null;
    const listingsAreLoaded = !queryInProgress && hasPaginationInfo;

    const loadingResults = (
      <div
        style={{
          display: 'flex',
          minHeight: 600,
          minWidth: 600,
          justifyContent: 'center',
          marginTop: 40,
        }}
      >
        <h2 className={css.title} style={{ fontSize: 30 }}>
          <FormattedMessage id="ManageListingsPage.loadingOwnListings" />
        </h2>
      </div>
    );

    const queryError = (
      <h2 className={css.error}>
        <FormattedMessage id="ManageListingsPage.queryError" />
      </h2>
    );

    const noResults =
      listingsAreLoaded && pagination.totalItems === 0 ? (
        <div className={css.headingContainerNoResults}>
          <h1 style={{ marginBottom: 0 }}>
            <FormattedMessage id="ManageListingsPage.noResults" />
          </h1>
          <h4 style={{ marginTop: 0, marginBottom: 20 }}>
            <FormattedMessage id="ManageListingsPage.noResultsSubText" />
          </h4>
          <div style={{ display: 'flex', flexDirection: 'row', gap: 30 }}>
            <div className={css.createListingButtonWrapper}>
              <NamedLink className={css.manageLink} name="NewListingPage">
                <PrimaryButton className={css.createListingButton}>
                  <FormattedMessage id="ManageListingsPage.createListing" />
                </PrimaryButton>
              </NamedLink>
            </div>
            <div className={css.createFirstListingButtonWrapper}>
              <NamedLink className={css.manageLink} name="ProfileSettingsPage">
                <PrimaryButton className={css.createListingButton}>
                  <FormattedMessage id="ManageListingsPage.updateProfile" />
                </PrimaryButton>
              </NamedLink>
            </div>
          </div>
        </div>
      ) : null;

    const heading =
      listingsAreLoaded && pagination.totalItems > 0 ? (
        <div className={css.headingContainerWithResults}>
          <h1 style={{ width: 'auto' }}>
            <FormattedMessage
              id="ManageListingsPage.youHaveListings"
              values={{ count: pagination.totalItems }}
            />
          </h1>
          <div className={css.createAnotherListingButtonWrapper}>
            <NamedLink className={css.manageLink} name="NewListingPage">
              <FormattedMessage id="ManageListingsPage.createAnotherListing" />
            </NamedLink>
          </div>
        </div>
      ) : (
        noResults
      );

    const page = queryParams ? queryParams.page : 1;
    const paginationLinks =
      listingsAreLoaded && pagination && pagination.totalPages > 1 ? (
        <PaginationLinks
          className={css.pagination}
          pageName="ManageListingsPage"
          pageSearchParams={{ page }}
          pagination={pagination}
        />
      ) : null;

    const listingMenuOpen = this.state.listingMenuOpen;
    const closingErrorListingId = !!closingListingError && closingListingError.listingId;
    const openingErrorListingId = !!openingListingError && openingListingError.listingId;

    const title = intl.formatMessage({ id: 'ManageListingsPage.title' });

    const panelWidth = 62.5;
    // Render hints for responsive image
    const renderSizes = [
      `(max-width: 767px) 100vw`,
      `(max-width: 1920px) ${panelWidth / 2}vw`,
      `${panelWidth / 3}vw`,
    ].join(', ');

    return (
      <Page title={title} scrollingDisabled={scrollingDisabled}>
        <LayoutSingleColumn>
          <LayoutWrapperTopbar>
            <TopbarContainer currentPage="ManageListingsPage" />
            <UserNav selectedPageName="ManageListingsPage" />
          </LayoutWrapperTopbar>
          <LayoutWrapperMain>
            {queryInProgress ? loadingResults : null}
            {queryListingsError ? queryError : null}
            <div className={css.listingPanel}>
              {heading}
              <div className={css.listingCards}>
                {listings.map(l => (
                  <ManageListingCard
                    className={css.listingCard}
                    key={l.id.uuid}
                    listing={l}
                    isMenuOpen={!!listingMenuOpen && listingMenuOpen.id.uuid === l.id.uuid}
                    actionsInProgressListingId={openingListing || closingListing}
                    onToggleMenu={this.onToggleMenu}
                    onCloseListing={onCloseListing}
                    onOpenListing={onOpenListing}
                    hasOpeningError={openingErrorListingId.uuid === l.id.uuid}
                    hasClosingError={closingErrorListingId.uuid === l.id.uuid}
                    renderSizes={renderSizes}
                  />
                ))}
              </div>
              {paginationLinks}
            </div>
          </LayoutWrapperMain>
          <LayoutWrapperFooter>
            <Footer />
          </LayoutWrapperFooter>
        </LayoutSingleColumn>
      </Page>
    );
  }
}

ManageListingsPageComponent.defaultProps = {
  listings: [],
  pagination: null,
  queryListingsError: null,
  queryParams: null,
  closingListing: null,
  closingListingError: null,
  openingListing: null,
  openingListingError: null,
};

const { arrayOf, bool, func, object, shape, string } = PropTypes;

ManageListingsPageComponent.propTypes = {
  closingListing: shape({ uuid: string.isRequired }),
  closingListingError: shape({
    listingId: propTypes.uuid.isRequired,
    error: propTypes.error.isRequired,
  }),
  listings: arrayOf(propTypes.ownListing),
  onCloseListing: func.isRequired,
  onOpenListing: func.isRequired,
  openingListing: shape({ uuid: string.isRequired }),
  openingListingError: shape({
    listingId: propTypes.uuid.isRequired,
    error: propTypes.error.isRequired,
  }),
  pagination: propTypes.pagination,
  queryInProgress: bool.isRequired,
  queryListingsError: propTypes.error,
  queryParams: object,
  scrollingDisabled: bool.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  const {
    currentPageResultIds,
    pagination,
    queryInProgress,
    queryListingsError,
    queryParams,
    openingListing,
    openingListingError,
    closingListing,
    closingListingError,
  } = state.ManageListingsPage;
  const listings = getOwnListingsById(state, currentPageResultIds);

  // console.log('listings');
  // console.log(listings);

  return {
    currentPageResultIds,
    listings,
    pagination,
    queryInProgress,
    queryListingsError,
    queryParams,
    scrollingDisabled: isScrollingDisabled(state),
    openingListing,
    openingListingError,
    closingListing,
    closingListingError,
  };
};

const mapDispatchToProps = dispatch => ({
  onCloseListing: listingId => dispatch(closeListing(listingId)),
  onOpenListing: listingId => dispatch(openListing(listingId)),
});

const ManageListingsPage = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  injectIntl
)(ManageListingsPageComponent);

export default ManageListingsPage;
