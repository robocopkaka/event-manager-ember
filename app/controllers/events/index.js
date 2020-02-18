import Controller from '@ember/controller';

export default class IndexController extends Controller {
  queryParams = ['page', 'limit'];
  page = 1;
  limit = 5
}
