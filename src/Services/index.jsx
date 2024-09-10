import axios from 'axios';

export const Api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const GetTrakingCode = async (code) => {
  try {
    const response = await Api.get(`pedido/numeropedido/${code}`);
    return response.data;
  } catch (error) {
    console.log('error', error);
  }
};

export const GetVerificationCode = async (code) => {
  try {
    const response = await Api.get(`pedido/codigoverificacao/${code}`);
    return response.data;
  } catch (error) {
    console.log('error', error);
  }
};
