export const userAuthentication = (req, res) => {
    console.log("verified");
    return res
            .status(200)
            .json({message : "User authenticated"});
}