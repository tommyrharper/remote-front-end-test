import React from 'react';
import './App.scss';
import Header from '../Header';
import SortAndFilter from '../SortAndFilter';
import PropertyListing from '../PropertyListing';
import useFetch from '../hooks/useFetch';

const API_ENDPOINT = '/api/properties';

const App = () => {
    const [response, loading, hasError] = useFetch(API_ENDPOINT);
    const showPropertyListing = response && !loading && !hasError;

    return (
        <div className="App">
            <Header/>
            <main>
                <SortAndFilter/>
                { showPropertyListing &&
                  <PropertyListing properties={response} />
                }
            </main>
        </div>
    );
};

export default App;
