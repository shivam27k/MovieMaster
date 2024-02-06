import { MediaType } from './apiResults';

export type Favorite = {
    id: number;
    mediaType: MediaType;
    name: string;
    thumbnail: string;
};
