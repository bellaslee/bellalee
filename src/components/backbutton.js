import 'material-icons/iconfont/material-icons.css';
import { ArrowBackIos } from '@mui/icons-material';
import { useRouter } from 'next/router';

function BackButton() {
  const router = useRouter();

  return (
    <div className="back-button" onClick={() => {
      router.back();
    }}>
      <ArrowBackIos /> Back
    </div>
  )
}

export default BackButton;