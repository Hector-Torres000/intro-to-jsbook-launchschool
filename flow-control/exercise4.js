function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');
/* the switch case will console log case '113' clause
and all the other clauses as well because there isn't 
a break statement and control falls through executing
all the subsequent clauses.*/
