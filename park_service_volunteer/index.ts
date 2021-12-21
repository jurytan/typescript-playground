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
  
  function isVerified(verified : string | boolean) {
   if (typeof verified === 'string') {
     return verified === 'Yes'
   } 
  
   return verified;
  }
  
  function getHours(activity : CombinedActivity) {
    if ('hours' in activity) {
      return activity.hours; 
    } 
    return activity.time;
  }
  
  function calculateHours(volunteers: Volunteers[]) {
    return volunteers.map((volunteer: Volunteers) => {
      let hours = 0;
  
      volunteer.activities.forEach((activity : CombinedActivity) => {
        if (isVerified(activity.verified)) {
          hours += getHours(activity);
        }
      });
  
      return {
        id: volunteer.id,
        name: volunteer.name,
        hours: hours,
      };
    });
  }
  
  function byHours(a, b) {
    return b.hours - a.hours;
  }
  
  const combinedVolunteers = combineVolunteers(
    [].concat(wolfPointVolunteers, raccoonMeadowsVolunteers)
  );
  
  const result = calculateHours(combinedVolunteers);
  result.sort(byHours);
  console.log(result);
  