const MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  
  function getFormattedDate(date: Date, prefomattedDate = '', hideYear = false) {
    const day = date.getDate();
    const month = MONTH_NAMES[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    let minutesDisplay: string = `${minutes}`
  
    if (minutes < 10) {
      // Adding leading zero to minutes
      minutesDisplay = `0${ minutes }`;
    } 

    if (prefomattedDate) {
        // Today at 10:20
        // Yesterday at 10:20
        return `${ prefomattedDate } at ${ hours }:${ minutesDisplay }`;
      }
    
      if (hideYear) {
        // 10. January at 10:20
        return `${ day }. ${ month } at ${ hours }:${ minutesDisplay }`;
      }
  
    // 10. January 2017. at 10:20
    return `${ day }. ${ month } ${ year }. at ${ hours }:${ minutesDisplay }`;
  }
  
  
  // --- Main function
  export function getTimeAgo(dateParam: Date) {
    if (!dateParam) {
      return null;
    }
  
    const DAY_IN_MS = 86400000; // 24 * 60 * 60 * 1000
    const today = new Date();
    const yesterday = new Date(today.getTime() - DAY_IN_MS);
    const seconds = Math.round((today.getTime() - dateParam.getTime()) / 1000);
    const minutes = Math.round(seconds / 60);
    const isToday = today.toDateString() === dateParam.toDateString();
    const isYesterday = yesterday.toDateString() === dateParam.toDateString();
    const isThisYear = today.getFullYear() === dateParam.getFullYear();
  
  
    if (seconds < 5) {
      return 'now';
    } else if (seconds < 60) {
      return `${ seconds } seconds ago`;
    } else if (seconds < 90) {
      return 'about a minute ago';
    } else if (minutes < 60) {
      return `${ minutes } minutes ago`;
    } else if (isToday) {
      return getFormattedDate(dateParam, 'Today'); // Today at 10:20
    } else if (isYesterday) {
      return getFormattedDate(dateParam, 'Yesterday'); // Yesterday at 10:20
    } else if (isThisYear) {
      return getFormattedDate(dateParam, '', true); // 10. January at 10:20
    }
  
    return getFormattedDate(dateParam); // 10. January 2017. at 10:20
  }