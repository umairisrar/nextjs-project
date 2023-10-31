import { Schema, model, models } from "mongoose";

const PartnersSchema = new Schema(
  {
    name: {
      type: String,
      // type: Schema.Types.ObjectId,
      // ref: 'User',
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Partners = models.Partners || model("Partners", PartnersSchema);

export default Partners;
