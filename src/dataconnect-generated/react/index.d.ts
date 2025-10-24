import { ListPublicListsData, GetListByIdData, GetListByIdVariables, GetMoviesByGenreData, GetMoviesByGenreVariables, CreateNewListData, CreateNewListVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useListPublicLists(options?: useDataConnectQueryOptions<ListPublicListsData>): UseDataConnectQueryResult<ListPublicListsData, undefined>;
export function useListPublicLists(dc: DataConnect, options?: useDataConnectQueryOptions<ListPublicListsData>): UseDataConnectQueryResult<ListPublicListsData, undefined>;

export function useGetListById(vars: GetListByIdVariables, options?: useDataConnectQueryOptions<GetListByIdData>): UseDataConnectQueryResult<GetListByIdData, GetListByIdVariables>;
export function useGetListById(dc: DataConnect, vars: GetListByIdVariables, options?: useDataConnectQueryOptions<GetListByIdData>): UseDataConnectQueryResult<GetListByIdData, GetListByIdVariables>;

export function useGetMoviesByGenre(vars: GetMoviesByGenreVariables, options?: useDataConnectQueryOptions<GetMoviesByGenreData>): UseDataConnectQueryResult<GetMoviesByGenreData, GetMoviesByGenreVariables>;
export function useGetMoviesByGenre(dc: DataConnect, vars: GetMoviesByGenreVariables, options?: useDataConnectQueryOptions<GetMoviesByGenreData>): UseDataConnectQueryResult<GetMoviesByGenreData, GetMoviesByGenreVariables>;

export function useCreateNewList(options?: useDataConnectMutationOptions<CreateNewListData, FirebaseError, CreateNewListVariables>): UseDataConnectMutationResult<CreateNewListData, CreateNewListVariables>;
export function useCreateNewList(dc: DataConnect, options?: useDataConnectMutationOptions<CreateNewListData, FirebaseError, CreateNewListVariables>): UseDataConnectMutationResult<CreateNewListData, CreateNewListVariables>;
