/**MongoDB
 * custom : user scema
 */
// const mongoose = require( "mongoose" );

// const userSchema = new mongoose.Schema({
//     first_name: { type: String, default: null },
//     last_name : { type: String, default: null },
//     email     : { type: String, unique: true  },
//     password  : { type: String },
//     token     : { type: String },
// });

// module.exports = mongoose.model("userInfo", userSchema);

module.exports = (sequelize, Sequelize) => {
  const userSchema = sequelize.define("userInfo", {
    first_name: {
      type: Sequelize.STRING,
    },
    last_name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    token: {
      type: Sequelize.STRING,
    },
  });
  return userSchema;
};
