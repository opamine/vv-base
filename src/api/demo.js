import request from '@/utils/request';

export default {
  getTodayPoetry: (params) => request.get('/two.json', { params }),
};
