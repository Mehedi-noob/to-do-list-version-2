export function formatDate(inputDateString) {
    const originalDate = new Date(inputDateString);
  
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = originalDate.toLocaleDateString('en-US', options);
  
    return formattedDate;
  }

  export function navInput(input) {
    const uniqueDates = [...new Set(input.map(el => formatDate(el.date)))];
    return uniqueDates;
  }
  
  export function filteredToDoList(input, date) {
    const array = input.filter(el => formatDate(el.date) === date); // Added return statement
    return array;
  }
  