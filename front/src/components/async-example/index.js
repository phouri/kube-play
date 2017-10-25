import Loader from '../Loader'
export default () => ({
  component: import('./Async'),
  loading: Loader,
  delay: 100,
  timeout: 1500
})