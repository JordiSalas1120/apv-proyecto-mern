import nodemailer from 'nodemailer'

const EnviarMail = async(datos)=>{
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
        subject:"Comprueba tu cuenta en APV",
        text:"Comprueba tu cuenta",
        html:`<p>Hola ${nombre}</p><br/>
                <p>Tu cuenta ya esta lista, solamente debes comprobarla en el siguiente enlac:</p> <br/>
                <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Confirmar</a>
        `
    })
}

export default EnviarMail