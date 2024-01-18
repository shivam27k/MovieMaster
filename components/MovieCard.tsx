import { Link } from 'expo-router';
import { ResultItem } from 'interfaces/apiResults';
import React from 'react';
import { Card, Image, Paragraph, Text, YStack } from 'tamagui';

type MovieCardProps = {
    movie: ResultItem;
};

const MovieCard = ({ movie }: MovieCardProps) => {
    return (
        <Link href={`/(drawer)/home/movie/${movie.id}`} asChild>
            <Card
                hoverStyle={{
                    scale: 0.925
                }}
                pressStyle={{ scale: 0.975 }}
                elevate
                scale={0.9}
                br={10}
                animation={'bouncy'}
            >
                <Card.Header w={'$full'} p={0} br={10}>
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w200${movie.poster_path}` }}
                        alt={movie.title}
                        w={'$full'}
                        minHeight={230}
                        br={10}
                    />
                </Card.Header>
                <Card.Footer marginBottom={10} marginTop={3} paddingHorizontal={10}>
                    <YStack w={'$full'}>
                        <Text
                            width={'$full'}
                            color={'lightgray'}
                            fontSize={'$5'}
                            fontWeight={'600'}
                            w={160}
                        >
                            {movie?.title?.toUpperCase() || movie?.name?.toUpperCase()}
                        </Text>
                        <Paragraph theme={'alt2'} fontSize={'$5'} fontWeight={'600'}>
                            {new Date(movie?.release_date! || movie?.first_air_date!).getFullYear()}
                        </Paragraph>
                    </YStack>
                </Card.Footer>
            </Card>
        </Link>
    );
};

export default MovieCard;
