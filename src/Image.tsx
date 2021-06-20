import styled from 'styled-components';
import './App.css';
import { IDataImage } from './Results';

function Image(props: IImage) {
    const ImageContainer = styled.div`
        margin: 20px;
        padding: 10px 10px 30px 10px;
        border: 1px solid #ddd;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    `;

    const Image = styled.img.attrs({
        alt: 'image'
    })`
        background: #eee;
        cursor: pointer;
    `;

    function copyToClipboard() {
        const el = document.createElement('textarea');
        el.value = props.image.url;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);

        props.onShowSnackBar();
    }

    return (
        <ImageContainer>
            <Image
                src={props.image.url}
                style={{
                    height: 200,
                    width: (200 * props.image.dims[0]) / props.image.dims[1]
                }}
                onClick={copyToClipboard}
            />
        </ImageContainer>
    );
}

export default Image;

export interface IImage {
    image: IDataImage;
    onShowSnackBar(): void;
}
