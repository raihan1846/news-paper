# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListPublicLists*](#listpubliclists)
  - [*GetListById*](#getlistbyid)
  - [*GetMoviesByGenre*](#getmoviesbygenre)
- [**Mutations**](#mutations)
  - [*CreateNewList*](#createnewlist)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListPublicLists
You can execute the `ListPublicLists` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listPublicLists(): QueryPromise<ListPublicListsData, undefined>;

interface ListPublicListsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListPublicListsData, undefined>;
}
export const listPublicListsRef: ListPublicListsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listPublicLists(dc: DataConnect): QueryPromise<ListPublicListsData, undefined>;

interface ListPublicListsRef {
  ...
  (dc: DataConnect): QueryRef<ListPublicListsData, undefined>;
}
export const listPublicListsRef: ListPublicListsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listPublicListsRef:
```typescript
const name = listPublicListsRef.operationName;
console.log(name);
```

### Variables
The `ListPublicLists` query has no variables.
### Return Type
Recall that executing the `ListPublicLists` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListPublicListsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListPublicListsData {
  lists: ({
    id: UUIDString;
    name: string;
    description?: string | null;
    createdAt: TimestampString;
    updatedAt: TimestampString;
  } & List_Key)[];
}
```
### Using `ListPublicLists`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listPublicLists } from '@dataconnect/generated';


// Call the `listPublicLists()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listPublicLists();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listPublicLists(dataConnect);

console.log(data.lists);

// Or, you can use the `Promise` API.
listPublicLists().then((response) => {
  const data = response.data;
  console.log(data.lists);
});
```

### Using `ListPublicLists`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listPublicListsRef } from '@dataconnect/generated';


// Call the `listPublicListsRef()` function to get a reference to the query.
const ref = listPublicListsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listPublicListsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.lists);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.lists);
});
```

## GetListById
You can execute the `GetListById` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getListById(vars: GetListByIdVariables): QueryPromise<GetListByIdData, GetListByIdVariables>;

interface GetListByIdRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetListByIdVariables): QueryRef<GetListByIdData, GetListByIdVariables>;
}
export const getListByIdRef: GetListByIdRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getListById(dc: DataConnect, vars: GetListByIdVariables): QueryPromise<GetListByIdData, GetListByIdVariables>;

interface GetListByIdRef {
  ...
  (dc: DataConnect, vars: GetListByIdVariables): QueryRef<GetListByIdData, GetListByIdVariables>;
}
export const getListByIdRef: GetListByIdRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getListByIdRef:
```typescript
const name = getListByIdRef.operationName;
console.log(name);
```

### Variables
The `GetListById` query requires an argument of type `GetListByIdVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetListByIdVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetListById` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetListByIdData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetListById`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getListById, GetListByIdVariables } from '@dataconnect/generated';

// The `GetListById` query requires an argument of type `GetListByIdVariables`:
const getListByIdVars: GetListByIdVariables = {
  id: ..., 
};

// Call the `getListById()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getListById(getListByIdVars);
// Variables can be defined inline as well.
const { data } = await getListById({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getListById(dataConnect, getListByIdVars);

console.log(data.list);

// Or, you can use the `Promise` API.
getListById(getListByIdVars).then((response) => {
  const data = response.data;
  console.log(data.list);
});
```

### Using `GetListById`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getListByIdRef, GetListByIdVariables } from '@dataconnect/generated';

// The `GetListById` query requires an argument of type `GetListByIdVariables`:
const getListByIdVars: GetListByIdVariables = {
  id: ..., 
};

// Call the `getListByIdRef()` function to get a reference to the query.
const ref = getListByIdRef(getListByIdVars);
// Variables can be defined inline as well.
const ref = getListByIdRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getListByIdRef(dataConnect, getListByIdVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.list);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.list);
});
```

## GetMoviesByGenre
You can execute the `GetMoviesByGenre` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMoviesByGenre(vars: GetMoviesByGenreVariables): QueryPromise<GetMoviesByGenreData, GetMoviesByGenreVariables>;

interface GetMoviesByGenreRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetMoviesByGenreVariables): QueryRef<GetMoviesByGenreData, GetMoviesByGenreVariables>;
}
export const getMoviesByGenreRef: GetMoviesByGenreRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMoviesByGenre(dc: DataConnect, vars: GetMoviesByGenreVariables): QueryPromise<GetMoviesByGenreData, GetMoviesByGenreVariables>;

interface GetMoviesByGenreRef {
  ...
  (dc: DataConnect, vars: GetMoviesByGenreVariables): QueryRef<GetMoviesByGenreData, GetMoviesByGenreVariables>;
}
export const getMoviesByGenreRef: GetMoviesByGenreRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMoviesByGenreRef:
```typescript
const name = getMoviesByGenreRef.operationName;
console.log(name);
```

### Variables
The `GetMoviesByGenre` query requires an argument of type `GetMoviesByGenreVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetMoviesByGenreVariables {
  genre: string;
}
```
### Return Type
Recall that executing the `GetMoviesByGenre` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMoviesByGenreData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetMoviesByGenre`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMoviesByGenre, GetMoviesByGenreVariables } from '@dataconnect/generated';

// The `GetMoviesByGenre` query requires an argument of type `GetMoviesByGenreVariables`:
const getMoviesByGenreVars: GetMoviesByGenreVariables = {
  genre: ..., 
};

// Call the `getMoviesByGenre()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMoviesByGenre(getMoviesByGenreVars);
// Variables can be defined inline as well.
const { data } = await getMoviesByGenre({ genre: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMoviesByGenre(dataConnect, getMoviesByGenreVars);

console.log(data.movies);

// Or, you can use the `Promise` API.
getMoviesByGenre(getMoviesByGenreVars).then((response) => {
  const data = response.data;
  console.log(data.movies);
});
```

### Using `GetMoviesByGenre`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMoviesByGenreRef, GetMoviesByGenreVariables } from '@dataconnect/generated';

// The `GetMoviesByGenre` query requires an argument of type `GetMoviesByGenreVariables`:
const getMoviesByGenreVars: GetMoviesByGenreVariables = {
  genre: ..., 
};

// Call the `getMoviesByGenreRef()` function to get a reference to the query.
const ref = getMoviesByGenreRef(getMoviesByGenreVars);
// Variables can be defined inline as well.
const ref = getMoviesByGenreRef({ genre: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMoviesByGenreRef(dataConnect, getMoviesByGenreVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.movies);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.movies);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateNewList
You can execute the `CreateNewList` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createNewList(vars: CreateNewListVariables): MutationPromise<CreateNewListData, CreateNewListVariables>;

interface CreateNewListRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewListVariables): MutationRef<CreateNewListData, CreateNewListVariables>;
}
export const createNewListRef: CreateNewListRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createNewList(dc: DataConnect, vars: CreateNewListVariables): MutationPromise<CreateNewListData, CreateNewListVariables>;

interface CreateNewListRef {
  ...
  (dc: DataConnect, vars: CreateNewListVariables): MutationRef<CreateNewListData, CreateNewListVariables>;
}
export const createNewListRef: CreateNewListRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createNewListRef:
```typescript
const name = createNewListRef.operationName;
console.log(name);
```

### Variables
The `CreateNewList` mutation requires an argument of type `CreateNewListVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateNewListVariables {
  name: string;
  description: string;
  isPublic: boolean;
}
```
### Return Type
Recall that executing the `CreateNewList` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateNewListData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateNewListData {
  list_insert: List_Key;
}
```
### Using `CreateNewList`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createNewList, CreateNewListVariables } from '@dataconnect/generated';

// The `CreateNewList` mutation requires an argument of type `CreateNewListVariables`:
const createNewListVars: CreateNewListVariables = {
  name: ..., 
  description: ..., 
  isPublic: ..., 
};

// Call the `createNewList()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createNewList(createNewListVars);
// Variables can be defined inline as well.
const { data } = await createNewList({ name: ..., description: ..., isPublic: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createNewList(dataConnect, createNewListVars);

console.log(data.list_insert);

// Or, you can use the `Promise` API.
createNewList(createNewListVars).then((response) => {
  const data = response.data;
  console.log(data.list_insert);
});
```

### Using `CreateNewList`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createNewListRef, CreateNewListVariables } from '@dataconnect/generated';

// The `CreateNewList` mutation requires an argument of type `CreateNewListVariables`:
const createNewListVars: CreateNewListVariables = {
  name: ..., 
  description: ..., 
  isPublic: ..., 
};

// Call the `createNewListRef()` function to get a reference to the mutation.
const ref = createNewListRef(createNewListVars);
// Variables can be defined inline as well.
const ref = createNewListRef({ name: ..., description: ..., isPublic: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createNewListRef(dataConnect, createNewListVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.list_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.list_insert);
});
```

