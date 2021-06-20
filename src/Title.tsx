import styled from 'styled-components';
import './App.css';

function Title(props: ITitle) {
    const Title = styled.h1`
        color: #333;
        text-align: center;
    `;

    return <Title>{props.title}</Title>;
}

export default Title;

export interface ITitle {
    title: string;
}
