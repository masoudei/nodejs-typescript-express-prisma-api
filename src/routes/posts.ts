import { Router } from 'express';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const postsRoute = Router();

postsRoute.get('/', (req, res) => {
    res.send("What's up doc ?!");
});


// Get all posts
postsRoute.get("/posts", async (req, res, next) => {
    try {
        const posts = await prisma.post.findMany({
            where: {
                published: true
            },
            orderBy: {
                createdAt: "desc"
            }
        });

        res.json({ posts });

    } catch (error: any) {
        next(error.message);
    }
});

// Create a post
postsRoute.post("/posts", async (req, res, next) => {
    try {
        const post = await prisma.post.create({
            data: {
                //TODO: get authorId from Middleware ( from request JWT token )
                authorId: 1, ...req.body
            }
        });
        res.json({ post });

    } catch (error: any) {
        next(error.message);
    }
});

// Get a post by id
postsRoute.get("/posts/:id", async (req, res, next) => {
    try {
        const post = await prisma.post.findUnique({
            where: { id: Number(req.params.id) }
        });

        res.json({ post });
    } catch (error: any) {
        next(error.message);
    }
});



// Update a post
postsRoute.patch("/posts/:id", async (req, res, next) => {
    try {
        const post = await prisma.post.update({
            where: { id: Number(req.params.id) },
            data: req.body,
        });

        res.json({ post });
    } catch (error: any) {
        next(error.message);
    }
});

// Delete a post
postsRoute.delete("/posts/:id", async (req, res, next) => {
    try {
        await prisma.post.delete({
            where: { id: Number(req.params.id) },
        });
        res.sendStatus(200);
    } catch (error: any) {
        next(error.message);
    }
});

// Get a user's posts
postsRoute.get("/users/:id/posts", async (req, res, next) => {
    try {
        const userPosts = await prisma.user.findUnique({
            where: {
                id: Number(req.params.id)
            },
            include: {
                posts: {
                    where: {
                        published: true,
                    }
                }
            }
        });

        const posts = userPosts?.posts;

        res.json({ posts });

    } catch (error: any) {
        next(error.message);
    }
});