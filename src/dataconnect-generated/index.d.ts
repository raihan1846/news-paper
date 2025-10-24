import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateNewListData {
  list_insert: List_Key;
}

export interface CreateNewListVariables {
  name: string;
  description: string;
  isPublic: boolean;
}

export interface GetListByIdData {
  list?: {
    id: UUIDString;
    name: string;
    description?: string | null;
    createdAt: TimestampString;
    updatedAt: TimestampString;
    isPublic: boolean;
    userId?: UUIDString | null;
    listItems_on_list: ({
      id: UUIDString;
      position: number;
      movie?: {
        id: UUIDString;
        title: string;
        year: number;
      } & Movie_Key;
    } & ListItem_Key)[];
  } & List_Key;
}

export interface GetListByIdVariables {
  id: UUIDString;
}

export interface GetMoviesByGenreData {
  movies: ({
    id: UUIDString;
    title: string;
    year: number;
    summary?: string | null;
    runtime?: number | null;
    genres?: string[] | null;
  } & Movie_Key)[];
}

export interface GetMoviesByGenreVariables {
  genre: string;
}

export interface ListItem_Key {
  id: UUIDString;
  __typename?: 'ListItem_Key';
}

export interface ListPublicListsData {
  lists: ({
    id: UUIDString;
    name: string;
    description?: string | null;
    createdAt: TimestampString;
    updatedAt: TimestampString;
  } & List_Key)[];
}

export interface List_Key {
  id: UUIDString;
  __typename?: 'List_Key';
}

export interface Movie_Key {
  id: UUIDString;
  __typename?: 'Movie_Key';
}

export interface Review_Key {
  id: UUIDString;
  __typename?: 'Review_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

export interface Watch_Key {
  id: UUIDString;
  __typename?: 'Watch_Key';
}

interface ListPublicListsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListPublicListsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListPublicListsData, undefined>;
  operationName: string;
}
export const listPublicListsRef: ListPublicListsRef;

export function listPublicLists(): QueryPromise<ListPublicListsData, undefined>;
export function listPublicLists(dc: DataConnect): QueryPromise<ListPublicListsData, undefined>;

interface GetListByIdRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetListByIdVariables): QueryRef<GetListByIdData, GetListByIdVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetListByIdVariables): QueryRef<GetListByIdData, GetListByIdVariables>;
  operationName: string;
}
export const getListByIdRef: GetListByIdRef;

export function getListById(vars: GetListByIdVariables): QueryPromise<GetListByIdData, GetListByIdVariables>;
export function getListById(dc: DataConnect, vars: GetListByIdVariables): QueryPromise<GetListByIdData, GetListByIdVariables>;

interface GetMoviesByGenreRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetMoviesByGenreVariables): QueryRef<GetMoviesByGenreData, GetMoviesByGenreVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetMoviesByGenreVariables): QueryRef<GetMoviesByGenreData, GetMoviesByGenreVariables>;
  operationName: string;
}
export const getMoviesByGenreRef: GetMoviesByGenreRef;

export function getMoviesByGenre(vars: GetMoviesByGenreVariables): QueryPromise<GetMoviesByGenreData, GetMoviesByGenreVariables>;
export function getMoviesByGenre(dc: DataConnect, vars: GetMoviesByGenreVariables): QueryPromise<GetMoviesByGenreData, GetMoviesByGenreVariables>;

interface CreateNewListRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewListVariables): MutationRef<CreateNewListData, CreateNewListVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateNewListVariables): MutationRef<CreateNewListData, CreateNewListVariables>;
  operationName: string;
}
export const createNewListRef: CreateNewListRef;

export function createNewList(vars: CreateNewListVariables): MutationPromise<CreateNewListData, CreateNewListVariables>;
export function createNewList(dc: DataConnect, vars: CreateNewListVariables): MutationPromise<CreateNewListData, CreateNewListVariables>;

