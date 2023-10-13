# Summary #
Concurrent workers is to eliminate memory limitations on large request handlings from Promise.all or Promise.allSettled
And also elimiate waiting time on batch process.


# Usage #
You can import class by `import { Runner } from "concurrent-workers"`

`Runner` class takes 3 parameters
`new Runner(tasks, number_of_workers, timeout)`

- `tasks` an array of functions that executes the task
- `number_of_workers` number of works to create, integer. Default = 3
- `timeout` ms, setting timeout on each task to avoid hanging onto one task for a long time. Default = 0

Eg.
```
  import { Runner } from "concurrent-workers"

  ...
  const tasks = [
    () => new Promise((resolve) => setTimeout(() => resolve(
      "bbb"
    ), 40000)),
    () => new Promise((resolve) => setTimeout(() => resolve(
        "ccc"
    ), 2000)),
    () => new Promise((resolve) => setTimeout(() => resolve(
        "ddd"
    ), 10000))
  ]
  const testC = new Runner(tasks, 10, 1000);
  const result = await testC.execute(); 

```
