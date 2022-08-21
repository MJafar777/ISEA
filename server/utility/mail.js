const nodemailer = require("nodemailer");
const pug = require("pug");
const client = require("@sendgrid/mail");
client.setApiKey(process.env.SENDGRID_API_KEY);

class Email {
  constructor(user, code) {
    this.user = user;
    this.code = code;
    this.from = process.env.EMAIL_FROM;
  }
  transport() {
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }
  async sendMessage(template, subject) {
    const pugTemplate = `${__dirname}/../views/mail/${template}.pug`;

    const html = pug.renderFile(pugTemplate, {
      subject,
      user: this.user,
      code: this.code,
    });

    const mailOptions = {
      from: this.from,
      to: this.user.email,
      subject: subject,
      html: html,
    };
    await this.transport().sendMail(mailOptions);
  }

  sendCode() {
    this.sendMessage("code", "code has been delivered");
  }

  async sendgridMessage(message) {
    const msg = {
      to: this.user.email,
      from: process.env.SENDGRID_EMAIL_FROM,
      subject: message,
      html: `<h1>YOUR CODE IS: ${this.code}</h1>`,
    };
    await client.send(msg);
  }
}

module.exports = Email;
