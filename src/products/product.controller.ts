import {Request, Response} from 'express'
import { ProductService } from '../services/productService'

class ProductController {

    async create(req: Request, res: Response) {
        const product = await new ProductService().create(req.body)

        return res.status(200).json(product)
    }

    async find(req: Request, res: Response) {
        const product = await new ProductService().findProducts()

        return res.status(200).json(product)
    }

    async writeFile(req: Request, res: Response) {
        const product = await new ProductService().productsWriteFile()

        return res.status(200).json(product)
    }

    async readFile(req: Request, res: Response) {
        const product = await new ProductService().productsReadFile()

        return res.status(200).json(product)
    } 
}

export default new ProductController()