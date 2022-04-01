import nodemailer from "nodemailer";



export default async (req, res) => {
  const { name, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    // tls: {
    //     // must provide server name, otherwise TLS certificate check will fail
    //     servername: "example.com"
    // }
    auth: {
      user: "sacrificeadmiin6@gmail.com",
      pass: process.env.pass,
    },
  });



  try {
    const emailRes = await transporter.sendMail({
      from: `${email}`,
      to: "sacrificeadmiin6@gmail.com",
      subject: `Contact submission from ${name}`,
      html: `<p>you have a new contact form submission</p><br>
      <p> name: ${name}</p><br>
      <p> email: ${email}</p><br>
      <p> phone: ${phone}</p><br>
      <p> message: ${message}</p><br>`,
    });
    console.log("message sent", emailRes.messageId);
  } catch (err) {
    console.log(err);
  }



  res.status(200).json({ name: "ok" });
};
