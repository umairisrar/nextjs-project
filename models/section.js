import { Schema, model, models } from "mongoose";

const SectionSchema = new Schema(
  {
    section: {
      type: String,
      // required: [true, 'Tag is required.'],
    },
  },
  {
    timestamps: true,
  }
);

const Section = models.Section || model("Section", SectionSchema);

export default Section;
