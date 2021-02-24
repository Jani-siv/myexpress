const db = require('../database');

const course = {
  getById: function(id, callback) {
    return db.query('select * from course where id_course=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from course', callback);
  },
  add: function(course, callback) {
    return db.query(
      'insert into course (cname,credits) values(?,?)',
      [course.cname, course.credits],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from course where id_course=?', [id], callback);
  },
  update: function(id, course, callback) {
    return db.query(
      'update course set cname=?,credits=? where id_course=?',
      [course.cname, course.credits, id],
      callback
    );
  }
};
module.exports = course;
