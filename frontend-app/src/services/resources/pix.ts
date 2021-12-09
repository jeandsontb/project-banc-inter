import api from '../api';

const request = async (value: number) => {
  const result = await api.post('/pix/request', {value});
  return result;
}

const pay = async (key: string) => {
  const result = await api.post(`/pix/pay/${key}`);
  return result;
}

const transactions = async () => {
  const result = await api.get('/pix/transactions');
  return result;
}

export {request, pay, transactions};