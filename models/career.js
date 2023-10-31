import { Schema, model, models } from "mongoose";

const CareerSchema = new Schema(
  {
    name: {
      type: String,
      // type: Schema.Types.ObjectId,
      // ref: 'User',
    },
    resume: {
      type: String,
    },
    address: {
      type: String,
    },
    phoneno: {
      type: String,
    },
    position: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Career = models.Career || model("Career", CareerSchema);

export default Career;
