import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'dragon-news',
  location: 'us-east4'
};

export const listPublicListsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListPublicLists');
}
listPublicListsRef.operationName = 'ListPublicLists';

export function listPublicLists(dc) {
  return executeQuery(listPublicListsRef(dc));
}

export const getListByIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetListById', inputVars);
}
getListByIdRef.operationName = 'GetListById';

export function getListById(dcOrVars, vars) {
  return executeQuery(getListByIdRef(dcOrVars, vars));
}

export const getMoviesByGenreRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMoviesByGenre', inputVars);
}
getMoviesByGenreRef.operationName = 'GetMoviesByGenre';

export function getMoviesByGenre(dcOrVars, vars) {
  return executeQuery(getMoviesByGenreRef(dcOrVars, vars));
}

export const createNewListRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewList', inputVars);
}
createNewListRef.operationName = 'CreateNewList';

export function createNewList(dcOrVars, vars) {
  return executeMutation(createNewListRef(dcOrVars, vars));
}

