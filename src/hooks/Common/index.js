import { useContext } from 'react';
import CommonContext  from '../../contexts/Common';

const useCommon = () => {
  const common = useContext(CommonContext);
  return common;
}

export default useCommon;
