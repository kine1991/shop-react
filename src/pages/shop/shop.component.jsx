import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { fetchCollectionsAsync } from '../../redux/shop/shop.actions'
import { selectIsCollectionsFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const WithSpinnerCollectionsOverview = WithSpinner(CollectionsOverview)
const WithSpinnerCollectionPage = WithSpinner(CollectionPage)

class ShopPage extends Component {
  componentDidMount(){
    this.props.fetchCollectionsAsync()
  }

  render() {
    const {match, isFetching, isLoaded} = this.props
    return (
      <div className='shop-page' style={{ textAlign: "center"}}>
        <Route exact path={`${match.path}`} render={(props) => <WithSpinnerCollectionsOverview isLoading={isFetching}  {...props}/>} />
        <Route path={`${match.path}/:collectionId`} render={(props) => <WithSpinnerCollectionPage isLoading={!isLoaded}  {...props}/>} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync()),
})

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsCollectionsFetching,
  isLoaded: selectIsCollectionsLoaded,

})


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)