import styled from 'styled-components';
import './App.css';

function Button(props: IButton) {
    const Button = styled.button`
        color: #fff;
        background: #333;
        border: 0;
        border-radius: 5px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
        padding: 10px 20px;
        margin: 20px 0 40px;
        cursor: pointer;
    `;

    function buttonClicked() {
        props.onButtonClicked();
    }

    return <Button onClick={buttonClicked}>{props.text}</Button>;
}

export default Button;

export interface IButton {
    text: string;
    onButtonClicked(): void;
}
