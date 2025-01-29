const mongoose = require('mongoose')

/* let notes = [
  {
    id: '1',
    content: 'HTML is easy',
    important: true
  },
  {
    id: '2',
    content: 'Browser can execute only JavaScript',
    important: false
  },
  {
    id: '3',
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true
  }
] */

//get password
/* if(process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
} */

const password = process.env.PASSWORD

//build url
const url =
    `mongodb+srv://fullstack:${password}@cluster0.dsknzto.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
console.log(url)

//mongoose config
mongoose.set('strictQuery', false)
mongoose.connect(url)


//add elements to database
const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

// model from schema
const Note = mongoose.model('Note', noteSchema)

// notes
//     .map(({id, ...note}) => note)
//     .map(note => new Note({...note}))
//     .forEach(note => note
//                         .save()
//                         .then(result => {
//                             console.log('note saved!', result)
//                         })
//     )

Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})