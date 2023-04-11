const { ObjectId: ObjectIdSchema } = mongoose.Schema
const { ObjectId: ObjectIdType } = mongoose.Types

const mongoURI = 'localhost:27017'
const mongoDatabaseName = 'discord'

mongoose.connect(`mongodb://${mongoURI}/${mongoDatabaseName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports = { mongo: mongoose, ObjectIdSchema, ObjectIdType }