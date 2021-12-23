// set optional members by adding a question mark after the variable name
// if you make it optional, make sure to do a null check! 
// Write an interface here
interface UserNameOptions {
    firstName?: string;
    lastName?: string;
    username: string;
  }
  
  function getUserName(options: UserNameOptions) {
    if (options.firstName && options.lastName) {
      return console.log(`${options.firstName} ${options.lastName}`);
    }
  
    return console.log(options.username);
  }
  
  getUserName({
    firstName: 'Mr.',
    lastName: 'Oshiro',
    username: 'hotelowner304'
  })
  
  getUserName({
    firstName: 'Madeline',
    username: 'mountainClimber'
  })