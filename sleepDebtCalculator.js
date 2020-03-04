const getSleepHours = day => {
    if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday') {
      return 7;
    } else if (day === 'wednesday') {
      return 7;
    } else if (day === 'thursday') {
      return 6;
    } else if (day === 'friday') {
      return 8;
    } else if (day === 'saturday') {
      return 6;
    } else if (day === 'sunday'){
      return 6;
    } else {
      return error;
    }
  };
  
  // console.log(getSleepHours('tuesday'));
    
    
  const getActualSleepHours = () =>
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  console.log(getActualSleepHours());
  
  
  const getIdealSleepHours = () => {
    const idealHours = 7;
    return idealHours * 7;
  };
  console.log(getIdealSleepHours());
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if(actualSleepHours === idealSleepHours) {
      console.log('perfect amount of sleep');
    } else if(actualSleepHours > idealSleepHours) {
      console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than you need this week. Feel good');
    } else if(actualSleepHours < idealSleepHours) {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you need this week. Get some rest');
    } else {
      console.log('error')
    }
  };
  
  calculateSleepDebt()
  
  
  
  
  
  
  
  
  
  
  
  
  