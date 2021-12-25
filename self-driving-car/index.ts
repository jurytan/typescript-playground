import { getObstacleEvents } from './computer-vision';

interface Events {
  [event: string] : boolean;
}

interface Control {
  execute: (command: string) => void;
}

interface Steering extends Control {
  turn: (direction: string) => void;
}

interface AutonomousCar {
  isRunning?: boolean;
  respond: (events: Events) => void;
}

interface AutonomousCarProps {
  isRunning?: boolean;
  steeringControl: Steering;
}

class SteeringControl implements Steering {
  execute (command: string): void {
    console.log(`Executing: ${command}`);
  }
  turn (direction: string): void {
    console.log('turn ' + direction);
  }
}

class Car implements AutonomousCar {
  isRunning;
  steeringControl;

  constructor(props : AutonomousCarProps) {
    this.isRunning = props.isRunning;
    this.steeringControl = props.steeringControl;
  }

  respond (events: Events): void {
    if (!this.isRunning) {
      console.log('The car is off!');
    }
    Object.keys(events).forEach((eventKey) => {
      if (!events[eventKey]) {
        return;
      } else if (eventKey === 'ObstacleLeft') {
        this.steeringControl.turn('right');
      } else if (eventKey === 'ObstacleRight') {
        this.steeringControl.turn('left');
      }
    })

  }
}

let steering = new SteeringControl();
let autonomousCar = new Car({isRunning: true, steeringControl: steering});
// console.log(autonomousCar.isRunning);
console.log(autonomousCar.respond(getObstacleEvents()));
// console.log(steering.turn('right'));