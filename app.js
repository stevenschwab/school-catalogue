class School {
    constructor(name, numberOfStudents, level, averageTestScores, schoolOverview) {
      this._name = name;
      this._numberOfStudents = numberOfStudents;
      this._level = level;
      this._averageTestScores = averageTestScores;
      this._schoolOverview = schoolOverview;
    }
  
    get name() {
      return this._name;
    }
  
    get level() {
      return this._level;
    }
  
    get numberOfStudents() {
      return this._numberOfStudents;
    }
  
    get averageTestScores() {
      return this._averageTestScores;
    }
  
    get schoolOverview() {
      return this._schoolOverview;
    }
  
    quickFacts() {
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }
  
    // substituteTeachers takes an array of strings
    static pickSubstituteTeacher(substituteTeachers) {
      const randomNumber = Math.floor(Math.random() * substituteTeachers.length);
      return substituteTeachers[randomNumber];
    }
  
    set numberOfStudents(newNumberOfStudents) {
      if(typeof newNumberOfStudents === 'number') {
        this._numberOfStudents = newNumberOfStudents;
      } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      }
    }
  }
  
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, averageTestScores, schoolOverview, pickupPolicy) {
      super(name, numberOfStudents, averageTestScores, schoolOverview);
      this._level = 'primary';
      this._pickupPolicy = pickupPolicy;
    }
  
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  class HighSchool extends School {
    constructor(name, numberOfStudents, averageTestScores, schoolOverview, sportsTeams) {
      super(name, numberOfStudents, averageTestScores, schoolOverview);
      this._level = 'high';
      this._sportsTeams = sportsTeams;
    }
  
    get sportsTeams() {
      return this._sportsTeams;
    }
  }
  
  class MiddleSchool extends School {
    constructor(name, numberOfStudents, averageTestScores, schoolOverview) {
      super(name, numberOfStudents, averageTestScores, schoolOverview);
    }
  }
  
  class SchoolCatalog {
    constructor(collectionOfSchools) {
      this._collectionOfSchools = collectionOfSchools;
    }
  
    get collectionOfSchools() {
      return this._collectionOfSchools;
    }
  }
  
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 90, 'school overview', 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  lorraineHansbury.quickFacts();
  console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));
  
  const alSmith = new HighSchool('Al E. Smith', 415, 80, 'school overview', ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  console.log(alSmith.sportsTeams);
  
  const instanceOfSchools = new SchoolCatalog([lorraineHansbury, alSmith]);
  console.log(instanceOfSchools.collectionOfSchools);