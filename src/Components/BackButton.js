import 'material-icons/iconfont/material-icons.css';
import '../assets/css/BackButton.css';
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  return (
    <div className="back-button" onClick={() => {
      navigate(-1);
      console.log('clicked')
    }}>
      <span className="material-icons">arrow_back_ios</span> Back
    </div>
  )
}

export default BackButton;