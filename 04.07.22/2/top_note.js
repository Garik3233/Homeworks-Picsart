function getStudentsWithNamesAndTopNotes(arr) {
  let newArr = [];
  for (let student of arr) {
    student.topNote = Math.max(...student.notes);
    newArr.push({
      name: student.name,
      topNote: student.topNote,
    });
  }
  console.log(newArr);
}

getStudentsWithNamesAndTopNotes([
  { name: "John", notes: [3, 5, 4] },
  { name: "Max", notes: [1, 4, 6] },
  { name: "Zygmund", notes: [1, 2, 3] },
]);
