import { createSelector } from 'reselect';

/**
 * Direct selector to the campaignManager state domain
 */
const selectCampaignManagerDomain = (state) => state.get('campaignManager');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CampaignManager
 */

const makeSelectCampaignManager = () => createSelector(
  selectCampaignManagerDomain,
  (substate) => substate.toJS()
);

export default makeSelectCampaignManager;
export {
  selectCampaignManagerDomain,
};
