import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Results from './Results';
import SearchInput from './SearchInput';

function App() {
    const [query, setQuery] = useState('');

    function changeQuery(query: string) {
        setQuery(query);
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <SearchInput query={query} onChangeQuery={changeQuery} />
                </Route>
                <Route path='/results'>
                    <Results onChangeQuery={changeQuery} />
                </Route>
                <Route render={() => <Redirect to='/' />} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
