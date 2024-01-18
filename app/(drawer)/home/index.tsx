import { Title, Main, Container, Subtitle } from 'tamagui.config';
import React, { useState } from 'react';
import { Card, Input, ListItem, ScrollView, Spinner, XStack, YStack } from 'tamagui';
import { useQuery } from '@tanstack/react-query';
import { getSearchResults, getTrending } from 'services/api';
import { ImageBackground } from 'react-native';
import MovieCard from 'components/MovieCard';
import useDebounce from 'utils/useDebounce';

const Home = () => {
    const [searchString, setSearchString] = useState('');

    const debounceString = useDebounce(searchString, 500);

    const trendingQuery = useQuery({
        queryKey: ['trending'],
        queryFn: getTrending
    });
    const searchQuery = useQuery({
        queryKey: ['search', debounceString],
        queryFn: () => getSearchResults(debounceString),
        enabled: debounceString.length > 0
    });

    return (
        <Main>
            <ImageBackground
                source={{
                    uri: 'https://source.unsplash.com/random/?movie&opacity:0.2'
                }}
                style={{ height: 200, width: '100%' }}
            >
                <Container>
                    <Title>Trending</Title>
                    <Input
                        placeholder="Search for a movies, TV shows, etc..."
                        placeholderTextColor={'#f2f2f2'}
                        size={'$4'}
                        value={searchString}
                        onChangeText={(text) => setSearchString(text)}
                    />
                </Container>
            </ImageBackground>
            <Subtitle p={10} size={'$9'}>
                {searchQuery.data?.results?.length! > 0 ? 'Search Results' : 'Trending'}
            </Subtitle>
            {(trendingQuery.isLoading || searchQuery.isLoading) && (
                <Spinner size="large" color={'$purple7'} />
            )}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 10, paddingHorizontal: 15 }}
            >
                {searchQuery.data?.results ? (
                    <>
                        {searchQuery.data?.results?.map((movie) => (
                            <MovieCard movie={movie} key={movie.id} />
                        ))}
                    </>
                ) : (
                    <>
                        {trendingQuery?.data?.results?.map((movie) => (
                            <MovieCard movie={movie} key={movie.id} />
                        ))}
                    </>
                )}
            </ScrollView>
        </Main>
    );
};

export default Home;
