// CHALLENGE 1: GET All posts
app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

// CHALLENGE 2: GET a specific post by id
app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find((post) => post.id === parseInt(id));
  if (!post) {
    return res.status(404).send("The post with the given ID was not found.");
  }
  res.status(200).json(post);
});

// CHALLENGE 3: POST a new post
app.post("/posts", (req, res) => {
  const { title, content, author } = req.body;
  const newPost = {
    id: ++lastId,
    title,
    content,
    author,
    date: new Date().toISOString(),
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// CHALLENGE 4: PATCH a post when you just want to update one parameter
app.patch("/posts/:id", (req, res) => {
  const { id } = req.params;
  const postIndex = posts.findIndex((post) => post.id === parseInt(id));
  if (postIndex === -1) {
    return res.status(404).send("The post with the given ID was not found.");
  }

  const post = posts[postIndex];
  const updatedPost = { ...post, ...req.body };
  posts[postIndex] = updatedPost;

  res.status(200).json(updatedPost);
});

// CHALLENGE 5: DELETE a specific post by providing the post id.
app.delete("/posts/:id", (req, res) => {
  const { id } = req.params;
  const postIndex = posts.findIndex((post) => post.id === parseInt(id));
  if (postIndex === -1) {
    return res.status(404).send("The post with the given ID was not found.");
  }

  posts = posts.filter((post) => post.id !== parseInt(id));
  res.status(204).send();
});
