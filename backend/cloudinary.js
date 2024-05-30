import cloudinary from "cloudinary";



cloudinary.config({
    cloud_name: 'dm3rs6xh4',
    api_key: process.env.APIKEY,
    api_secret: process.env.APISECKEY
})

export function uploadToCloudinary (path, folder)  {
    return cloudinary.v2.uploader.upload(path, {
        folder
    }).then((data) => {
        return { url: data.url, public_id: data.public_id };
    }).catch((error) => {
        console.log(error)
    })
}

export async function removeFromCloudinary(public_id){
    await cloudinary.v2.uploader.destroy(public_id, function (error, result) {
        console.log(result, error)
    })
}
