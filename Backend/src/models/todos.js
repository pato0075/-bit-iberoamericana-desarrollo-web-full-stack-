const mongoose = require ("mongoose");

const todosSchema = mongoose.Schema({

    name:{
        type: String,
        require: true,
    },
    completed: {
        type: Boolean,
        require: true,
    },

});

module.exports = mongoose.model('todo', todosSchema);