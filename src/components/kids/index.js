import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Item, Label} from 'semantic-ui-react';
import Message from '../forms/message';
import Story from '../panels/story';
import SponsorMessage from '../panels/sponsors';
import {fetchKids} from "../../actions/kids";

class ListKids extends Component {
  componentWillMount() {
    this.props.fetchKids();
  }

  render() {
    let isFetching = this.props.state.kid.isFetching;
    let kids = this.props.state.kid.kids;
    if (isFetching) {
      return (
        <div className='text centered'>
          <h2>Loading ...</h2>
          <img src="/assets/images/loading.gif" alt="Loading content"/>
        </div>
      )
    } else if (!isFetching && kids.length >= 1) {
      return (
        <Grid columns='1'>
          <Grid.Row columns='2'>
            <Grid.Column width='10'>
              <h3>Kids Stories at FHCK</h3>
              <Story kids={kids}/>
            </Grid.Column>
            <Grid.Column width='6'>
              <Message/>
              <br/><br/>
              <hr/>
              <SponsorMessage/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
    } else {
      return (
        <Message message='Fatal error' body='Application crushed'/>
      )
    }
  }
}

export default connect((state) => ({state}), {fetchKids})(ListKids);
