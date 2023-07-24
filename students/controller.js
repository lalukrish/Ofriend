const pool = require("../db");
const queries = require("../students/queries");

const getStudents = (req, res) => {
  pool.query(queries.getStudents, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
    console.log(results);
  });
};

const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
    console.log(results);
  });
};

const addStudent = (req, res) => {
  const { email, age, dob, name } = req.body;
  //checking for the email already exists or not
  pool.query(queries.checkEmailExists, [email], (err, result) => {
    if (result.rows.length) {
      res.send("email already exists");
    }
    //add student to the db
    pool.query(queries.addStudent, [email, age, dob, name], (error, result) => {
      if (error) throw error;
      res.status(201).send("user created successfully");
    });
  });
};

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentById, [id], (error, result) => {
    const noUser = !result.rows.length;
    if (noUser) {
      res.send("no user data found,can't delete the user");
    }
  });
  pool.query(queries.deleteUser, [id], (error, result) => {
    if (error) throw error;
    res.status(200).send("user deleted successfully");
  });
};

//myown

const signup = (req, res) => {
  const { name, email, password } = req.body;
  pool.query(queries.checkEmailExists, [email], (error, result) => {
    if (result.rows.length) {
      res.send("email already exists");
    }
    pool.query(queries.userAdd, [name, email, password], (error, result) => {
      if (error) throw error;
      res.status(201).send("user created successfully");
    });
  });
};

const singin = (req, res) => {
  const [email, password] = req.body;
  pool.query(queries.getEmail, [email], (error, results) => {
    const noUser = !results.rows.length;
    if (noUser) {
      res.send("user is not found with this email");
    }
    // pool.query(queries.)
  });
};

module.exports = {
  getStudents,
  getStudentById,
  addStudent,
  deleteUser,
  signup,
};
