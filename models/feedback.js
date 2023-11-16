import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    message: {
      type: String,
    },
    subject: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Feedback = models.Feedback || model("Feedback", PromptSchema);

export default Feedback;
