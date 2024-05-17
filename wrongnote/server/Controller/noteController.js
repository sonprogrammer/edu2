const noteModel = require('../db/models/noteModel')

async function getNote(req, res, next){
    try {
        console.log('req.params', req.params.userId)
        const userId = req.params.userId
        const note = await noteModel.find({user: userId})
        console.log('note1', note)
        res.json(note)
    } catch (error) {
        next(error)
    }
}

async function postNote(req, res, next){
    try {
        const userId = req.params.userId
        const { content } = req.body
        console.log('content', content)
        const newNote = new noteModel({
            content,
            user: userId
        })
        const saveNote = await newNote.save()
        console.log('note', saveNote)
        res.status(200).json(saveNote)
    } catch (error) {
        next(error)
    }
}

async function updateNote(req, res, next){
    try {
        const noteId = req.params.noteId
        console.log('noteid', req.params.noteId)
        const { content } = req.body
        const note = await noteModel.findByIdAndUpdate('664727474b01df1e9dcbac62', { content }, {new : true})
        console.log('note3', note)
        res.json(note)
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getNote,
    postNote,
    updateNote
}