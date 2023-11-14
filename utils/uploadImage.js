// import DatauriParser from "datauri/parser";

// export const createImage = async (img, buffers) => {
//   try {
//     const parser = new DatauriParser();
//     const base64Image = parser.format(
//       path.extname(img.name).toString(),
//       buffers
//     );

//     const uploadedImageResponse = await cloudinary.uploader.upload(
//       base64Image.content,
//       "partners",
//       { resource_type: "image" }
//     );
//     return uploadedImageResponse;
//   } catch (error) {
//     console.log("🚀 ~ file: route.js:69 ~ createImage ~ error:", error);
//   }
// };
