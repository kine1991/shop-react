import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'

import { fetchCollectionsAsync } from '../../redux/shop/shop.actions'
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionsPageContainer from '../collection/collection.container'

class ShopPage extends Component {
  componentDidMount(){
    this.props.fetchCollectionsAsync()
  }

  render() {
    const {match, isFetching, isLoadedCollections} = this.props
    return (
      <div className='shop-page' style={{ textAlign: "center"}}>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionsPageContainer} />
        {/* <Route path={`${match.path}/:collectionId`} render={(props) => <WithSpinnerCollectionPage isLoading={!isLoadedCollections}  {...props}/>} /> */}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync()),
})

export default connect(null, mapDispatchToProps)(ShopPage)