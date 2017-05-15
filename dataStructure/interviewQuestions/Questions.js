''`QUESTION 1>  Create a function that accepts an integer with range 0-999 and prints out the English translation as a string.
For example, if the input is 348, the output is "Three hundred forty eight".
If the input is 22, the output is "Twenty two". ****solved answer1.js****```

```QUESTION 2> Given a string, print out the character that occurs the most times in succession and how many times it occurred.
For example, if the input is "rrrrSSS##rrrRR", the output is "r", 4. ****solved answer2.js****```

```QUESTION 3>Create a function that checks if two trees are deeply equal to each other.****solved answer3.js****```

```QUESTION 4> Given an array that looks like:
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
3. A GET route that returns only the name values for each object, e.g. `['Name1', 'Name2', 'Name3', 'Name4'] `****solving answer4.js****```;



/*QUESTION 5> You're provided an unsorted list of comparables (make them integers for simplicity)
and you need to determine the largest gap between successive elements _if_ they were sorted.
For example:
// input
[1 4 2 7 18 3 10 15]
// output
5 (gap between 10 and 15)*/
