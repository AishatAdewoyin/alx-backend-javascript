function getListStudentIds() {
  const arrayOfObjects = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' }];
  if (arrayOfObjects) {
    console.log(arrayOfObjects.id);
  } else {
    console.log([]);
  }
}

getListStudentIds();
console.log(getListStudentIds);