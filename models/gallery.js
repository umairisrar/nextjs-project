import { Schema, model, models } from "mongoose";

const GallerySchema = new Schema(
  {
    name: {
      type: String,
      // type: Schema.Types.ObjectId,
      // ref: 'User',
    },
    images: [String],
  },
  {
    timestamps: true,
  }
);

const Gallery = models.Gallery || model("Gallery", GallerySchema);

export default Gallery;
