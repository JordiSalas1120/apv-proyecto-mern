import mongoose from 'mongoose'
//usamos mongoose para poder concetar con mongodb
const conectarDB = async () => {
    try {
        //abrimos llaves al connect ya que asaremos configuraciones
        const db = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        const url = `${db.connection.host}:${db.connection.port}`
        console.log(`MongoDB conectado en: ${url}`);
    } catch (error) {
        console.log(`error: ${error.message}`);
        process.exit(1)
    }
}

export default conectarDB