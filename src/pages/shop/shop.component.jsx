import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase'
import { updateCollections } from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const WithSpinnerCollectionsOverview = WithSpinner(CollectionsOverview)
const WithSpinnerCollectionPage = WithSpinner(CollectionPage)

class ShopPage extends Component {
  state = {loading: true}

  componentDidMount(){
    const collectionRef = firestore.collection('collections')
    collectionRef.onSnapshot(async snapshot => {
      const collectionMap = await convertCollectionsSnapshotToMap(snapshot)
      this.props.updateCollections(collectionMap)
      this.setState({loading: false})
    })
  }

  
  render() {
    const {match} = this.props
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props) => <WithSpinnerCollectionsOverview isLoading={this.state.loading}  {...props}/>} />
        <Route path={`${match.path}/:collectionId`} render={(props) => <WithSpinnerCollectionPage isLoading={this.state.loading}  {...props}/>} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap)),
})


export default connect(null, mapDispatchToProps)(ShopPage)