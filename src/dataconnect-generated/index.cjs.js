const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'dragon-news',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const listPublicListsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListPublicLists');
}
listPublicListsRef.operationName = 'ListPublicLists';
exports.listPublicListsRef = listPublicListsRef;

exports.listPublicLists = function listPublicLists(dc) {
  return executeQuery(listPublicListsRef(dc));
};

const getListByIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetListById', inputVars);
}
getListByIdRef.operationName = 'GetListById';
exports.getListByIdRef = getListByIdRef;

exports.getListById = function getListById(dcOrVars, vars) {
  return executeQuery(getListByIdRef(dcOrVars, vars));
};

const getMoviesByGenreRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMoviesByGenre', inputVars);
}
getMoviesByGenreRef.operationName = 'GetMoviesByGenre';
exports.getMoviesByGenreRef = getMoviesByGenreRef;

exports.getMoviesByGenre = function getMoviesByGenre(dcOrVars, vars) {
  return executeQuery(getMoviesByGenreRef(dcOrVars, vars));
};

const createNewListRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewList', inputVars);
}
createNewListRef.operationName = 'CreateNewList';
exports.createNewListRef = createNewListRef;

exports.createNewList = function createNewList(dcOrVars, vars) {
  return executeMutation(createNewListRef(dcOrVars, vars));
};
