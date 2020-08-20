const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		completed: {
			type: Boolean,
			required: false,
		},
	},
	{
		versionKey: false,
	}
);

module.exports = mongoose.model("task", taskSchema);

// REACT STATE
// this.state = {
//     todos: [
//         {
//             id: uuidv4(),
//             title: "Read React Doc",
//             completed: false,
//         },
//         {
//             id: uuidv4(),
//             title: "Make",
//             completed: false,
//         },
//     ],
// };

// DB EXAMPLE:

// db.tasks.insert({title: "Make To-Do", completed: false });

// db.tasks.insert({ id: uuidv4(), title: "Make To-Do", completed: false });
