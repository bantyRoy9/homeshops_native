export type TProducts = IProduct[]
export interface IProduct {
  id: number
  name: string
  description: string
  base_price: string
  created_at: string
  brand: IBrand
  category: ICategory
  image_url:string
  shopProducts: IShopProduct[]
}

export interface IBrand {
  id: number
  name: string
  description: string
  created_at: string
}

export interface ICategory {
  id: number
  name: string
  created_at: string
}

export interface IShopProduct {
  id: number
  price: string
  created_at: string
}
