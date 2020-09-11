import { Request, Response, Router } from 'express';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
    try {   
        const request = req.body;
        return res.status(201).end();
    } catch (err) {
        console.error(err.message, err);
        return res.status(404).json({
            error: err.message,
        });
    }
});

export default router;