
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method, query, body, headers } = req;

    res.status(200).json({
        method,
        query,
        body,
        headers,
    });
}