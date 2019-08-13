import React, { useEffect } from 'react'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'

import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionsPageContainer from '../collection/collection.container'


const ShopPage = ({match, fetchCollectionsStart}) => {

  useEffect(() => {
    fetchCollectionsStart()
  }, [fetchCollectionsStart])
  return (
    <div className='shop-page' style={{ textAlign: "center"}}>
      <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
      <Route path={`${match.path}/:collectionId`} component={CollectionsPageContainer} />
      {/* <Route path={`${match.path}/:collectionId`} render={(props) => <WithSpinnerCollectionPage isLoading={!isLoadedCollections}  {...props}/>} /> */}
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
})

export default connect(null, mapDispatchToProps)(ShopPage)



// class ShopPage extends React.Component {
//   componentDidMount(){
//     this.props.fetchCollectionsStart()
//   }

//   render() {
//     const {match} = this.props
//     return (
//       <div className='shop-page' style={{ textAlign: "center"}}>
//         <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
//         <Route path={`${match.path}/:collectionId`} component={CollectionsPageContainer} />
//         {/* <Route path={`${match.path}/:collectionId`} render={(props) => <WithSpinnerCollectionPage isLoading={!isLoadedCollections}  {...props}/>} /> */}
//       </div>
//     )
//   }
// }