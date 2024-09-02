import axios from 'axios';

export const Api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const GetVerificationCode = async (code) => {
  try {
    const response = await Api.get(`/pedido/numeropedido/${code}`);

    return response;
  } catch (error) {
    console.log('error', error);
  }
};
