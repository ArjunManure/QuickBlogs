import ImageKit from "imagekit";

var imagekit = new ImageKit({
    publicKey : process.env.ImageKit_public_key,
    privateKey : process.env.ImageKit_private_key,
    urlEndpoint : process.env.ImageKit_URL_endpoint
})

export default imagekit;