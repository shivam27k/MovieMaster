import React, { useState } from 'react';
import { MediaType } from 'interfaces/apiResults';
import { ImageBackground } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getMovieDetails } from 'services/api';
import { Image, Paragraph, ScrollView, Spinner, Text, View, XStack, YStack } from 'tamagui';
import { Container } from 'tamagui.config';
import { useMMKVBoolean, useMMKVObject } from 'react-native-mmkv';
import { Favorite } from 'interfaces/favourites';

type DetailsPageProps = {
    id: string;
    mediaType: MediaType;
};

const DetailsPage = ({ id, mediaType }: DetailsPageProps) => {
    const [isFavourite, setIsFavourite] = useMMKVBoolean(`${mediaType}-${id}`);

    const [favourites, setFavourites] = useMMKVObject<Favorite[]>('favourites');

    const movieQuery = useQuery({
        queryKey: [mediaType, id],
        queryFn: () => getMovieDetails(+id, mediaType)
    });

    const responseMovie = movieQuery?.data;

    const toggleFavourite = () => {};

    return (
        <Container p={0}>
            {movieQuery.isLoading ? (
                <Spinner size="large" color={'$purple7'} />
            ) : responseMovie?.title || responseMovie?.name ? (
                <ScrollView>
                    <ImageBackground
                        source={{
                            uri: `https://image.tmdb.org/t/p/w300${responseMovie?.backdrop_path}`
                        }}
                        style={{
                            width: '100%',
                            height: 370
                        }}
                        alt={responseMovie?.title}
                    >
                        <View
                            m={10}
                            w={220}
                            h={320}
                            bw={5}
                            br={6}
                            borderColor={'#fff'}
                            shadowColor={'#000'}
                            shadowOffset={{ width: 2, height: 4 }}
                            shadowRadius={50}
                        >
                            <Image
                                source={{
                                    uri: `https://image.tmdb.org/t/p/w300${responseMovie?.poster_path}`
                                }}
                                alt={responseMovie?.title}
                                w={210}
                                h={310}
                                br={6}
                            />
                        </View>
                    </ImageBackground>
                    <Container>
                        <XStack alignItems="center" gap={10}>
                            <Text fontSize={30} color={'$purple9Dark'} fontWeight={'900'} flex={1}>
                                {responseMovie?.title || responseMovie?.name}{' '}
                                <Text fontSize={15} color={'$purple9Dark'} fontWeight={'600'}>
                                    {`(${new Date(responseMovie?.release_date! || responseMovie?.first_air_date!).getFullYear()})`}
                                </Text>
                            </Text>
                        </XStack>
                        <YStack
                            animation={'lazy'}
                            enterStyle={{
                                opacity: 0,
                                y: 10
                            }}
                        >
                            <Paragraph color={'$purple7Dark'}>{responseMovie?.tagline}</Paragraph>
                            <Paragraph color={'black'} marginTop={10}>
                                {responseMovie?.overview}
                            </Paragraph>
                        </YStack>
                    </Container>
                </ScrollView>
            ) : (
                <Container>
                    <Text>{responseMovie?.status_message}</Text>
                </Container>
            )}
        </Container>
    );
};

export default DetailsPage;
