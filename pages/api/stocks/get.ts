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
        let response = await fetch(`${process.env.SERVER_URL}/stocks`);
        mRes.status(200).json(await response.json())
    } catch (e) {
        console.log(e.message);
        mRes.status(500).json({message: e.message})
    }
}
