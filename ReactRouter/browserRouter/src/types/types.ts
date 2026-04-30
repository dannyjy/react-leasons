interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserType {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface PostType {
    userId: number;
    id: number;
    title: string;
    body: string
}

export interface PostCardProp extends PostType {
  onViewPost: (id: number) => void
  onUserPosts: (id: number) => void
}
 
export type SinglePostProp = {
    postId: number
}

export interface ProductCategory {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: string;
  product_category_id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  manufacturer: string;
  created_at: string;
  updated_at: string;
  product_category: ProductCategory;
}

export interface PaginatedProducts {
  currentPage: number
  data: Product[]
  last_page: number
}

export type ProductProp = {
  name: string;
  price: number;
  image: string;
  description: string;
  product_category: ProductCategory;
}