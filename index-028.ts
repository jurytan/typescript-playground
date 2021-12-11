function getFilledArray<T>(value: T, n: number): T[] {
    return Array(n).fill(value);
  }
  
  let stringArray: string[];
  let numberArray: number[];
  let personArray: {name: string, age: number}[];
  let coordinateArray: [number, number][];
  
  // Write your code below:
  type Person = {
    name: string,
    age: number
  }
  
  type Coordinate = [number, number];
  
  stringArray = getFilledArray<string>('hi', 6);
  numberArray = getFilledArray<number>(9, 6);
  personArray = getFilledArray<Person>({name: 'J. Dean', age: 24}, 6);
  coordinateArray = getFilledArray<Coordinate>([3, 4], 6);
  