import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title:{
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    hour: {
      type: String,
    },

    when: {
      type: String,
      required: true,
    },

    duration: {
      type: String
    },

    userId: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('Task', TaskSchema);