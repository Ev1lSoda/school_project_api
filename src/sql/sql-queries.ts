import { Connection, Query } from "mysql";
import * as mysql from "mysql";
import { EnumSex, EnumSubjects } from "../interfaces/enums";
import Teacher from "../interfaces/teacher";

export default class SqlQueries {
  constructor() {}
  // var mysql = require('mysql');
  mysqlConnect(): Connection {
    return mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "abcde",
      database: "school",
    });
  }
  addTeacher(teacher: Teacher): Promise<number> {
    return new Promise((resolve, reject) => {
      const db = this.mysqlConnect();
      db.query(
        `INSERT INTO teacher(
            age,
            sex,
            yearsOfExperience,
            workedInUniversity,
            canTeachSubjects,
            teacherName)
            VALUES(?,?,?,?,?,?)`,
        [teacher.age, teacher.sex, teacher.yearsOfExperience, teacher.workedInUniversity, teacher.canTeachSubjects, teacher.teacherName],
        (err, result) => {
          if (err) {
            return reject(`Error at teacher: ${err}`);
          }
          resolve(result);
        }
      );
    });
  }
  updTeacher(teacher: Teacher): Promise<number> {
    return new Promise((resolve, reject) => {
      const db = this.mysqlConnect();
      db.query(
        `UPDATE teacher
        SET
        age = ?,
        sex = ?,
        yearsOfExperience = ?,
        workedInUniversity = ?,
        canTeachSubjects = ?,
        teacherName = ?
        WHERE teacherId = ?`,
        [teacher.age, teacher.sex, teacher.yearsOfExperience, teacher.workedInUniversity, teacher.canTeachSubjects, teacher.teacherName, teacher.teacherId],
        (err, result) => {
          if (err) {
            return reject(`Error at teacher: ${err}`);
          }
          resolve(result);
        }
      );
    });
  }
  delTeacher(teacher: Teacher): Promise<number> {
    return new Promise((resolve, reject) => {
      const db = this.mysqlConnect();
      db.query(
        `DELETE FROM teacher
        WHERE teacherId=?`,
        [teacher.teacherId],
        (err, result) => {
          if (err) {
            return reject(`Error at teacher: ${err}`);
          }
          resolve(result);
        }
      );
    });
  }
  getTeacher(teacher: Teacher): Promise<number> {
    let WHERE = `WHERE`;
    for (let [prop, val] of Object.entries(teacher)) {
      WHERE += ` ${prop} = ${val} AND`;
    }

    let cheker = WHERE.slice(-4);
    if (cheker === " AND") {
      WHERE = WHERE.slice(0, WHERE.length - 4);
    } else if (WHERE === "WHERE") {
      WHERE = "";
    }
    return new Promise((resolve, reject) => {
      const db = this.mysqlConnect();
      db.query(
        `SELECT * FROM teacher 
          ${WHERE}`,
        [teacher.age],
        (err, result) => {
          if (err) {
            return reject(`Error at teacher: ${err}`);
          }
          resolve(result);
        }
      );
    });
  }
  getTargetMathTeachers(): Promise<number> {
    return new Promise((resolve, reject) => {
      const db = this.mysqlConnect();
      db.query(
        `
        SELECT teacher.teacherId, teacher.teacherName, teacher.age, teacher.sex,
         teacher.yearsOfExperience, teacher.workedInUniversity,
         teacher.canTeachSubjects
         FROM teacher, lesson
         WHERE lesson.subject="Math" AND lesson.classroomNum=100 AND lesson.teacherId=teacher.teacherId
         AND teacher.yearsOfExperience>10 AND lesson.lessonStart>='08:30:00' AND lesson.lessonEnd<='14:30:00'`,
        (err, result) => {
          if (err) {
            return reject(`Error at teacher: ${err}`);
          }
          resolve(result);
        }
      );
    });
  }
}
