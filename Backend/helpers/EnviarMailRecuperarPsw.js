import nodemailer from 'nodemailer'

const EnviarMailRecuperarPsw = async(datos)=>{
    const transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS
        }
      });
    //enviar mail
    const { nombre, email, token } = datos

    const info = await transport.sendMail({
        from:"APV-Administrador de Pacientes de Veterinaria",
        to:email,
        subject:"Restablecer Password",
        text:"Restablecer tu Password",
        html:`<p>Hola ${nombre}</p><br/>
                <p>Restable tu Password desde el siguiente enlace:</p> <br/>
                <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Restablecer</a>
        `
    })
}

export default EnviarMailRecuperarPsw