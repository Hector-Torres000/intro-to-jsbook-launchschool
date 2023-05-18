function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);
/*it will console log 'not empty' because
an empty array [] is still considered to
be truthy. */
