// import {format as borrowersDate} from 'borrowers-dates';
import moment from 'npm:moment';

function formatDate(date, format){
  // return window.moment(date).format(format); // moment from bower; No import
  // return borrowersDate(date, format);  // import borrowers-dates
  return moment(date).format(format);
}

export {
  formatDate
};
