import React from "react";

import SHOP_data from './shopData';

import Collectionpreview from '../../components/collection-preview/Collection-preview'

class ShopPage extends React.Component {
    constructor(props) {
     
            super(props);

            this.state = {
                collections: SHOP_data
            }
        
    }



    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({ id, ...otherCollectionProps }) => (
                        <Collectionpreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>)
    }

}

export default ShopPage;