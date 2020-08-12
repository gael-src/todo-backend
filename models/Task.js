const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		artist: {
			type: String,
			required: true,
		},
		rating: {
			type: Number,
			required: false,
		},
	},
	{
		versionKey: false,
	}
);

module.exports = mongoose.model("Task", TaskSchema);

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
