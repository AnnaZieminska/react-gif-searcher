import styled from 'styled-components';

function Error() {
    const Error = styled.h1`
        color: #e53935;
        text-align: center;
    `;

    return <Error>An error occurred, please try again later.</Error>;
}

export default Error;
