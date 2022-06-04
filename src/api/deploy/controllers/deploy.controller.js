export const deploy = async (req, res) => {
  try {
    res.status(200).json("Deployed successfully");
  } catch (error) {
    console.log(error);
  }
};
