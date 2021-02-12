export const BASE_URL = 'https://54991d7d0d6f.ngrok.io/api';
export const APP_IDENTYFIER = '14cd0829-3d9b-4934-a1f9-0980d11bf09f';

export const GET_REQUEST = {
  auth: {
    login: '/auth/signin',
    signup: '/auth/signup',
  },
  menu: {
    product: '/product/getProductsByAppId',
    category: '/category/getCategoriesByAppId',
  },
};
