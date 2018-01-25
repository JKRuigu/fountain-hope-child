import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Grid, Button} from 'semantic-ui-react';
import SearchForm from '../components/forms/Search';
import ListKids from '../components/kids/index';
import AddKid from '../components/kids/add';

class kids extends Component {
  render() {
    return (
      <div>
        <Grid columns='2'>
          <Grid.Row>
            <Grid.Column>
              <h2 className='ui left floated'>Fountain of Hope Centre Kids</h2>
            </Grid.Column>
            <Grid.Column className='ui right aligned'>
              <SearchForm placeholder='Search for a kid...'/>
              <Button primary
                      style={{'marginLeft':'10px'}}
                      onClick={()=> this.props.history.push('/kids/add')}>
                <i className='icon plus'/>
                Child
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid columns='1'>
          <Grid.Row>
            <Grid.Column>
              <Route path='/kids' exact component={ListKids} />
              <Route path='/kids/add' exact component={AddKid} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
};

export default kids;
