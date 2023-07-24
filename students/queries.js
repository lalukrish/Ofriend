const getStudents = "select * from users";
const getStudentById = `select * from users where id=$1`;
const checkEmailExists = "select s from users s where s.email =$1";
const addStudent = "insert into users (email,age,dob,name)values($1,$2,$3,$4)";
const deleteUser = "delete from users where id=$1";
const getEmail = "select * from users where email=$1";
const addPassword = "insert into user";
//my own

const userAdd = "insert into users (name,email,password)values($1,$2,$3)";

module.exports = {
  getStudents,
  getStudentById,
  checkEmailExists,
  addStudent,
  deleteUser,
  userAdd,
  getEmail,
};
