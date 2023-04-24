import { ProductType } from "../products/types/product.types";
import ProductModel from "../products/product.schema";
import { writeFile, readFile } from 'fs/promises'

export class ProductService {
    
    async create(data: ProductType) {
        const criar = await ProductModel.create(data)
        
        return criar
    }

    async findProducts() {
        const productList = await ProductModel.find()

        return productList
    }

    async productsWriteFile() {
        const list = await this.findProducts()
        writeFile('allProducts.json', JSON.stringify(list, null, 2))
        .then(() => { return { success: true }})
        .catch(() => {return { success: false }})
    }
    
    async productsReadFile() {
        var ler = []
        const criar = readFile('allProducts.json', 'utf8').then(x => {
            ler = JSON.parse(x)
        })
        console.log(ler)
        return ler
    }
    
}