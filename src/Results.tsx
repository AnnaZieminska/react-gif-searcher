import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from './Button';
import { environment } from './env';
import Error from './Error';
import Image from './Image';
import Loader from './Loader';
import { IQuery } from './SearchInput';
import SnackBar from './SnackBar';
import Title from './Title';

function Results(props: IQuery) {
    const [showInfo, setShowInfo] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [data, setData] = useState<IDataImage[]>([]);
    const [query, setQuery] = useState<string>('');
    const history = useHistory();

    useEffect(() => {
        let timer = setTimeout(() => setShowInfo(false), 1000);
        return () => {
            clearTimeout(timer);
        };
    }, [showInfo]);

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
        findSearchQuery();

        if (query) {
            const url = `${environment.baseUrl}/search?key=${environment.key}&limit=10&q=${query}`;
            const fetchData = async () => {
                try {
                    const response: AxiosResponse<any> = await axios(url);
                    const data: IDataImage[] = response.data.results.map(
                        (result: any) => {
                            return {
                                id: result.id,
                                url: result.media[0].gif.url,
                                dims: result.media[0].gif.dims
                            };
                        }
                    );
                    setData(data);
                } catch (error) {
                    setIsError(true);
                }

                setIsLoading(false);
            };
            fetchData();
        }
    }, [history, query]);

    function findSearchQuery() {
        const search = history.location.search.replace(
            environment.searchQuery,
            ''
        );
        setQuery(search);
    }

    function buttonClicked() {
        props.onChangeQuery('');
        history.push('/');
    }

    function showSnackBar() {
        setShowInfo(true);
    }

    if (isError) return <Error />;
    if (isLoading) return <Loader />;

    return (
        <div className='fxcol fx-horizontal-center screen-height'>
            <Title title={'Results for: ' + query}></Title>
            <Button
                text={'Go back to search'}
                onButtonClicked={buttonClicked}
            ></Button>

            <div className='fxrow fx-horizontal-center fx-vertical-center fxwrap'>
                {data?.map((image: any) => {
                    return (
                        <Image
                            key={image.id}
                            image={image}
                            onShowSnackBar={showSnackBar}
                        />
                    );
                })}
            </div>

            {showInfo && (
                <SnackBar text={'Image url copied to clipboard successfully'} />
            )}
        </div>
    );
}

export default Results;

export interface IDataImage {
    id: string;
    dims: number[];
    url: string;
}
