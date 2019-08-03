import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => {
    // console.log(match)
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    );
}


export default ShopPage;






// import React, { Component } from 'react'
// import { connect } from 'react-redux'

// import { SHOP_DATA } from '../../data-json/data-json'
// import CollectionPreview from '../../components/collection-preview/collection-preview.component'

// import './shop.styles.scss';

// class ShopPage extends Component {
//     constructor(){
//         super()
//         this.state = {
//             collections: SHOP_DATA
//         }
//     }
//     render() {
//         const {collections} = this.state
//         return (
//             <div className="shop-page">
//                 {
//                     collections.map(({id, ...otherProps}) => <CollectionPreview key={id} {...otherProps}/>)
//                 }
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => ({
//     collections: state.shop
// })

// export default connect(mapStateToProps)(ShopPage); 