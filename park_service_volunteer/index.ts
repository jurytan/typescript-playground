import {
    RaccoonMeadowsVolunteers,
    RaccoonMeadowsActivity,
    raccoonMeadowsVolunteers,
  } from './raccoon-meadows-log';
  
  import {
    WolfPointVolunteers,
    WolfPointActivity,
    wolfPointVolunteers,
  } from './wolf-point-log';
  
  type CombinedActivity = RaccoonMeadowsActivity | WolfPointActivity;
  
  type Volunteers = {
    id: number;
    name: string;
    activities: CombinedActivity[];
  };
  
  function combineVolunteers(
    volunteers: (RaccoonMeadowsVolunteers | WolfPointVolunteers)[]
  ) {
    return volunteers.map((volunteer : RaccoonMeadowsVolunteers | WolfPointVolunteers) => {
      let id = typeof volunteer.id == 'string' ? parseInt(volunteer.id, 10) : volunteer.id;
       return {id: id , name: volunteer.name, activities: volunteer.activities }; 
    });
  }
  
  function calculateHours(volunteers: Volunteers[]) {
    return volunteers.map((volunteer) => {
      let hours = 0;
  
      volunteer.activities.forEach((activity) => {
  
      });
  
      return {
        id: volunteer.id,
        name: volunteer.name,
        hours: hours,
      };
    });
  }
  
  const combinedVolunteers = combineVolunteers(
    [].concat(wolfPointVolunteers, raccoonMeadowsVolunteers)
  );
  
  console.log(combinedVolunteers);
  