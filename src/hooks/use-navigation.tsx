import { useNavigate, To, NavigateOptions, useLocation, useParams } from 'react-router-dom';

const useCustomNavigation = () => {
  const location = useLocation();
  const getParams = useParams();
  const navigate = useNavigate();
    

  const navigateTo = (path: To, options: NavigateOptions = {}) => {
    navigate(path, options);
  };
  return { navigate:navigateTo, getParams, location   };
};

export default useCustomNavigation;
