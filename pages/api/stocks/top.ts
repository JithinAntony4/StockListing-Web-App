import type {NextApiRequest, NextApiResponse} from 'next'

type Stock = {
    id: string,
    symbol: string,
    name: string,
    marketCap: string,
    price: string,
    stockPE: string,
    dividendYield: string,
    roce: string,
    roe: string,
    debtToEquity: string,
    eps: string,
    reserves: string,
    debt: string,
}
type StockError = {
    message: string
}

export default async (req: NextApiRequest, mRes: NextApiResponse<Stock[] | StockError>) => {
    try {
        let selectedStock = req.query.name;
        let filterBody = {"order": ["price DESC"], "limit": 10}
        let response = await fetch(`${process.env.SERVER_URL}/stocks?filter=${escape(JSON.stringify(filterBody))}`);
        let resp = await response.json();
        mRes.status(200).json(resp);
    } catch (e) {
        console.log(e.message);
        mRes.status(500).json({message: e.message})
    }
}
