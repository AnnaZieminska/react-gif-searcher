import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import { environment } from './env';
import Title from './Title';

function SearchInput(props: IQuery) {
    const history = useHistory();

    const Input = styled.input.attrs({
        type: 'text',
        placeholder: 'Type text to search...'
    })`
        width: 70vw;
        max-width: 600px;
        border: 1px solid #e5e5e5;
        border-radius: 5px;
        height: 50px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
        padding: 0 10px;
        margin: 20px 0 60px;
    `;

    function searchSubmit(event: any) {
        event.preventDefault();
        history.push(`/results${environment.searchQuery}${props.query}`);
    }

    function changeQuery(event: any) {
        props.onChangeQuery(event.target.value);
    }

    return (
        <div className='fxcol fx-horizontal-center fx-vertical-center screen-height'>
            <form onSubmit={searchSubmit}>
                <Title title={'Search for GIFs'}></Title>
                <Input
                    value={props.query}
                    onChange={event => changeQuery(event)}
                    autoFocus
                />
            </form>
        </div>
    );
}

export default SearchInput;

export interface IQuery {
    query?: string;
    onChangeQuery(query: string): void;
}
