import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Paisagem deslumbrante",
        imagem: "https://source.unsplash.com/random/1920x1080/?nature"
    },
    {
        id: 3,
        descricao: "Cachorro fofo",
        imagem: "https://images.dog.ceo/breeds/goldenretriever/dog.jpg"
    }
];

const app = express();
app.use(express.json());

app.listen(3000,() => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id){
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
};

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);
});