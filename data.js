const myData = (req, res, next) => {
   res.status(200).json({
      email: "fruitful186@gmail.com",
      current_datetime: new Date().toISOString(),
      github_url: "https://github.com/FruitfulEjiro/HNG-Stage-0",
   });
};

export default myData;
