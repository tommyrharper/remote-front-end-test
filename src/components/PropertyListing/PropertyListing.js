import React from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';

const PropertyListing = ({ properties }) => {
    return (
        <div className="PropertyListing">
            {
                properties
                    .map((property) => <PropertyCard key={property.id} {...property}/>)
            }
        </div>
    )
};

export default PropertyListing;
