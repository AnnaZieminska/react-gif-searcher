import styled from 'styled-components';

function SnackBar(props: ISnackBar) {
    const SnackBar = styled.div`
        border-radius: 5px;
        background: #4caf50;
        color: #fff;
        position: absolute;
        padding: 10px 20px;
        animation: show 0.1s;
        bottom: 20px;

        @keyframes show {
            from {
                opactity: 0;
                bottom: 10px;
            }
            to {
                opactity: 1;
                bottom: 20px;
            }
        }
    `;

    return <SnackBar>{props.text}</SnackBar>;
}

export default SnackBar;

export interface ISnackBar {
    text: string;
}
