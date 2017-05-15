/*Given an array that looks like:
[
  {
    id: 1,
    name: 'Name1'
  },
  {
    id: 2,
    name: 'Name2',
  },
  {
    id: 3,
    name: 'Name3',
  },
  {
    id: 4,
    name: 'Name4',
  }
];

Create some Express routes that do the following:
1. A GET route that returns an object by its ID when the user accesses /get-by-id/:id
2. A POST route accepting a body of an array with integers that returns an array of objects with the matching IDs, e.g., a body with `[1,2,3]` returns an array of the 3 objects with IDs 1, 2, and 3.
3. A GET route that returns only the name values for each object, e.g. `['Name1', 'Name2', 'Name3', 'Name4']*/
