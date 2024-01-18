import { Title, Main, Container, Subtitle } from 'tamagui.config';
import React, { useState } from 'react';
import { Card, Input, ListItem, ScrollView, Spinner, XStack, YStack } from 'tamagui';
import { useQuery } from '@tanstack/react-query';
import { getTrending } from 'services/api';
import { ImageBackground } from 'react-native';
import MovieCard from 'components/MovieCard';

const Home = () => {
    const [searchString, setSearchString] = useState('');

    const trendingQuery = useQuery({
        queryKey: ['trending'],
        queryFn: getTrending
    });
    const searchQuery = useQuery({
        queryKey: ['search', searchString],
        queryFn: getTrending
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
                Trending
            </Subtitle>
            {(trendingQuery.isLoading || searchQuery.isLoading) && (
                <Spinner size="large" color={'$purple7'} />
            )}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 10, paddingHorizontal: 15 }}
            >
                {trendingQuery?.data?.results?.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </ScrollView>
        </Main>
    );
};

export default Home;
