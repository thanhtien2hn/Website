import NotFoundPage from '../NotFoundPage/NotFoundPage'
import HomePage from '../pages/HomePage/HomePage'
import OrderPage from '../pages/OrderPage/OrderPage'
import ProductDetailsPage from '../pages/ProductDetailsPage/ProductDetailsPage'
import ProductPage from '../pages/ProductPage/ProductPage'
import SignInPage from '../pages/SignInPage/SignInPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import TypeProductPage from '../pages/TypeProductPage/TypeProductPage'

export const routes = [
  { path: '/', page: HomePage, isShowHeader: true },
  { path: '/order', page: OrderPage, isShowHeader: true },
  { path: '/product', page: ProductPage, isShowHeader: true },
  { path: '/type', page: TypeProductPage, isShowHeader: true },
  { path: '/signIn', page: SignInPage, isShowHeader: true },
  { path: '/signUp', page: SignUpPage, isShowHeader: true },
  { path: '/productDetails', page: ProductDetailsPage, isShowHeader: true },
  { path: '*', page: NotFoundPage },
]
