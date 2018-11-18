/**
*
* CampaignList
*
*/

import React from 'react';


class CampaignList extends React.PureComponent {
  state={};
  render() {
    const {menu} = this.props;
    return (
      <div className="list_wrapper">
      {!this.props.campaignList.length && 
        <div className="no_data">No Campaigns yet!</div>}
        {this.props.campaignList.map((campaign, i)=>{
          return(
          <div key ={campaign.id} 
            className={`list_item ${i===this.props.selectedIndex ? 'selected':''}`}>
            <div 
              className="campaign_name overflow_ellipse"
              onClick={this.openActionWindow(i, menu.HISTORY)}>
              <div className="circle">{i+1}</div>
            {campaign.name}
            </div>
            <i className ={`fa ${campaign.paused?'fa-play-circle':'fa-pause-circle'} action_item`}
              onClick={this.pauseOrResume(i,campaign.paused)}/>
            <i className="fa fa-edit action_item"
              onClick={this.openActionWindow(i, menu.RENAME)}/>
            <i className ="fa fa-comment action_item"
              onClick={this.openActionWindow(i, menu.COMMENT)}
            />
            <i className="fa fa-trash action_item"
              onClick={this.deleteCampaign(campaign.id)}
            />
          </div>);
        })}
      </div>
    );
  }

  pauseOrResume = (id,paused) => ()=>{
    this.props.pauseOrResume(id,!paused);
  }

  openActionWindow =(index, menu) =>()=>{
    this.props.openActionWindow(index, menu)
  }

  deleteCampaign = (index) =>() =>{
    this.props.deleteCampaign(index)
  }

  renameCampaign =() =>{

  }
}

CampaignList.propTypes = {

};

export default CampaignList;
