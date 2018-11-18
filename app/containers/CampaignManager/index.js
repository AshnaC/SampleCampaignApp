/**
 *
 * CampaignManager
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCampaignManager from './selectors';
import reducer from './reducer';
import saga from './saga';
import {CAMPAIGN_ACTION, MENU_OPTIONS} from './constants';

import CampaignLayout from 'components/CampaignLayout';

export class CampaignManager extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <CampaignLayout 
          actions ={CAMPAIGN_ACTION} 
          menu={MENU_OPTIONS}/>
      </div>
    );
  }
}

CampaignManager.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  campaignmanager: makeSelectCampaignManager(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'campaignManager', reducer });
const withSaga = injectSaga({ key: 'campaignManager', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CampaignManager);
