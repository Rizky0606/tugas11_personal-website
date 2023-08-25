const express = require("express");
const app = express();
const PORT = 5000;
const path = require("path");

// setup call hbs with sub folder
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/views"));

app.use(express.static("./src"));

app.use(express.urlencoded({ extended: false }));

// rounting
app.get("/", home);
app.get("/blog", blog);
app.get("/contact", contact);
app.get("/testimonial", testimonial);
app.get("/blogDetail/:id", blogDetail);
app.post("/blog", addBlog);

// local server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

function home(req, res) {
  res.render("index");
}

function blog(req, res) {
  res.render("blog");
}

function contact(req, res) {
  res.render("contact");
}

function testimonial(req, res) {
  res.render("testimonial");
}

function blogDetail(req, res) {
  res.render("project-detail");
}

function addBlog(req, res) {
  const { inputName, inputDescription } = req.body;

  console.log(inputName);
  console.log(inputDescription);

  res.redirect("/");
}

function blogDetail(req, res) {
  const { id } = req.params;

  const data = {
    id,
    title: "Dumbways Web App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui risus, pulvinar quis hendrerit vitae, posuere a metus. Mauris pellentesque sem nec tortor imperdiet sollicitudin. Praesent feugiat libero ut sem convallis congue. Praesent metus metus, bibendum eget placerat in, gravida at massa. Cras ullamcorper dapibus venenatis. Phasellus volutpat vel magna dapibus lobortis. Sed eleifend, lorem at molestie tristique, est libero pulvinar urna, et condimentum libero magna eu arcu.",
  };

  res.render("project-detail", { data });
}
