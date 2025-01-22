
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method, query: { id } } = req;

    switch (method) {
        case 'GET':
            // Handle GET request
            res.status(200).json({ 
                message: `Getting user with ID: ${id}`,
                userId: id 
            });
            break;

        case 'PUT':
            // Handle PUT request
            res.status(200).json({ 
                message: `Updating user with ID: ${id}`,
                userId: id,
                body: req.body 
            });
            break;

        case 'DELETE':
            // Handle DELETE request
            res.status(200).json({ 
                message: `Deleting user with ID: ${id}`,
                userId: id 
            });
            break;

        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}