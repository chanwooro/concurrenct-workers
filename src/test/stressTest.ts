import { Runner } from "../Runner";

const process = [
  () => new Promise((resolve) => setTimeout(() => resolve(
      "bbb"
  ), 40000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ccc"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ddd"
  ), 10000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "eee"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "fff"
  ), 5000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "aaa"
  ), 30000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "bbb"
  ), 40000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ccc"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ddd"
  ), 10000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "eee"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "fff"
  ), 5000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "aaa"
  ), 30000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "bbb"
  ), 40000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ccc"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ddd"
  ), 10000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "eee"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "fff"
  ), 5000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "aaa"
  ), 30000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "bbb"
  ), 40000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ccc"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ddd"
  ), 10000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "eee"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "fff"
  ), 5000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "aaa"
  ), 30000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "bbb"
  ), 40000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ccc"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ddd"
  ), 10000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "eee"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "fff"
  ), 5000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "aaa"
  ), 30000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "bbb"
  ), 40000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ccc"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ddd"
  ), 10000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "eee"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "fff"
  ), 5000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "aaa"
  ), 30000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "bbb"
  ), 40000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ccc"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ddd"
  ), 10000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "eee"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "fff"
  ), 5000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "aaa"
  ), 30000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "bbb"
  ), 40000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ccc"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ddd"
  ), 10000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "eee"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "fff"
  ), 5000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "aaa"
  ), 30000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "bbb"
  ), 40000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ccc"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ddd"
  ), 10000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "eee"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "fff"
  ), 5000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "aaa"
  ), 30000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "bbb"
  ), 40000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ccc"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ddd"
  ), 10000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "eee"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "fff"
  ), 5000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "aaa"
  ), 30000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "bbb"
  ), 40000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ccc"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ddd"
  ), 10000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "eee"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "fff"
  ), 5000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "aaa"
  ), 30000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "bbb"
  ), 40000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ccc"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ddd"
  ), 10000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "eee"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "fff"
  ), 5000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "aaa"
  ), 30000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "bbb"
  ), 40000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ccc"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ddd"
  ), 10000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "eee"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "fff"
  ), 5000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "aaa"
  ), 30000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "bbb"
  ), 40000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ccc"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ddd"
  ), 10000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "eee"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "fff"
  ), 5000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "aaa"
  ), 30000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "bbb"
  ), 40000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ccc"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ddd"
  ), 10000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "eee"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "fff"
  ), 5000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "aaa"
  ), 30000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "bbb"
  ), 40000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ccc"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ddd"
  ), 10000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "eee"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "fff"
  ), 5000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "aaa"
  ), 30000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "bbb"
  ), 40000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ccc"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ddd"
  ), 10000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "eee"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "fff"
  ), 5000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "aaa"
  ), 30000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "bbb"
  ), 40000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ccc"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ddd"
  ), 10000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "eee"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "fff"
  ), 5000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "aaa"
  ), 30000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "bbb"
  ), 40000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ccc"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ddd"
  ), 10000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "eee"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "fff"
  ), 5000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "aaa"
  ), 30000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "bbb"
  ), 40000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ccc"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "ddd"
  ), 10000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "eee"
  ), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(
      "fff"
  ), 5000))
  
]

const run = async () => {
  const testC = new Runner(process, 10, 10000);
  const result = await testC.execute();
  console.log("resi;ts", result)
}

run();