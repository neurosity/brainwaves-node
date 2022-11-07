const { config } = require("dotenv");
const { argv } = require("yargs");

config();

module.exports = {
  email: "email" in argv ? argv.email : process.env.NEUROSITY_EMAIL,
  password: "password" in argv ? argv.password : process.env.NEUROSITY_PASSWORD,
  deviceId:
    "deviceId" in argv ? argv.deviceId : process.env.NEUROSITY_DEVICE_ID,
};
