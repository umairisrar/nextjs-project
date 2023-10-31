import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema(
  {
    name: {
      type: String,
      // type: Schema.Types.ObjectId,
      // ref: 'User',
    },
    date: {
      type: Date,
      // required: [true, 'Prompt is required.'],
    },
    section: {
      type: String,
      // required: [true, 'Tag is required.'],
    },
  },
  {
    timestamps: true,
  }
);

const Project = models.Project || model("Project", PromptSchema);

export default Project;
