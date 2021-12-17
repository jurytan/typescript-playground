import courses from "./courses";
import studyGroups from "./studyGroups";

type SearchEventOptions = {
  query: string | number,
  eventType: string | number
}

type StudyGroup = {
  id: number,
  courseId: number, 
  title: string,
  keywords: string[],
  eventType: string
}

type Course = {
  id: number,
  studyGroupId: number, 
  title: string,
  keywords: string[],
  eventType: string
}

function searchEvents(options : SearchEventOptions) {
  let events : (Course | StudyGroup)[] = options.eventType === 'courses' ? courses : studyGroups;
  return events.filter((event : Course | StudyGroup) => {
    if (typeof options.query == 'number') {
      return event.id == options.query;
    }
    if (typeof options.query == 'string') {
      return event.keywords.includes(options.query);
    }
  })
}

let enrolledEvents : (Course | StudyGroup)[] = [];
function enroll (event : Course | StudyGroup) {
  enrolledEvents.push(event);
}

let searchResults = searchEvents({query: 'art', eventType: 'courses'});
console.log(searchResults);

enroll(searchResults[0]);
console.log(enrolledEvents);