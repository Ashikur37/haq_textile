// "use server"
// import cloudinary from 'cloudinary';
// function getCloudinaryPublicId(imageUrl:string) {
//     const regex = /\/[^/]+\/([^./]+)\.[^/]+$/;
//     const match = imageUrl.match(regex);
//     if (match && match.length > 1) {
//       return  "images/"+match[1];
//     }
//     return null; // Return null if the public ID cannot be extracted
//   }
//  export  async function deleteImageFromCloudinary(image: string) {
//     const publicId=getCloudinaryPublicId(image);
//     if(!publicId){
//       return {
//         err:"No public id found"
//       };
//     }
//     cloudinary.v2.config({
//       cloud_name:process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
//       api_key: process.env.CLOUDINARY_API_KEY,
//       api_secret: process.env.CLOUDINARY_API_SECRET,
//     });
//     console.log(process.env.DATABASE_URL);
//     try {
//       const result = await cloudinary.v2.uploader.destroy(publicId);
//       console.log(result);
//     } catch (error) {
//       console.error('Error deleting image from Cloudinary:', error);
//       throw error;
//     }
//   }