import nodemailer from 'nodemailer';
import config from '../config';

export const sendEmail = async (to: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: config.NODE_ENV === 'production', // true for port 465, false for other ports
    auth: {
      user: 'ektiaruddinniloy859@gmail.com',
      pass: 'qavf hilh cwhj rmer',
    },
  });

  await transporter.sendMail({
    from: 'ektiaruddinniloy859@gmail.com', // sender address
    to, // list of receivers
    subject: 'Reset your password within ten mins', // Subject line
    text: '', // plain text body
    html, // html body
  });
};
