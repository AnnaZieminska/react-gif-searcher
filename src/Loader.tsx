import styled from 'styled-components';

function Loader() {
    const Loader = styled.div`
        &:after {
            content: '';
            display: block;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            border: 8px solid #bbb;
            border-color: #bbb transparent #bbb transparent;
            animation: load 1.2s linear infinite;
        }

        @keyframes load {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    `;

    return (
        <div className='fxflex fxcol fx-horizontal-center fx-vertical-center screen-height'>
            <Loader />
        </div>
    );
}

export default Loader;
