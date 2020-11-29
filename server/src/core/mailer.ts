import nodemailer from "nodemailer";

const options = {
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "73425f2c567d9e",
    pass: "0a8d07e300215a",
  },
};

const transport = nodemailer.createTransport(options);

export default transport;
