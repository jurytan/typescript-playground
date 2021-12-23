import { getBudgetAsync } from './api_043';

// this uses a concept called index signatures
// this is useful for when you know the structure of incoming data
// but not the names of the properties beforehand

// This is an example: 
// {
//     '40.712776': true;
//     '41.203323': true;
//     '40.417286': false;
//  }

// Write an interface here
interface Budget {
  [category: string]: number;
}

async function getBudget() {
  const result: Budget = await getBudgetAsync();
  console.log(result);
}

getBudget();