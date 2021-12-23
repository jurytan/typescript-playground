// you can extend interfaces like this, so you can make it generic and then extend it
// just don't get confused and use "implements" lol 
interface Developer extends Humano{
    code: () => void;
  }
  
  // Add your interface here
  interface Humano {
    name: string;
    hobbies: string[];
  }
  
  const me: Developer = { 
    code: () => console.log('Headphones on. Coffee brewed. Editor open.'),
    name: 'Corrina', 
    hobbies: ['Building rockets']
  }
  
  me.code();