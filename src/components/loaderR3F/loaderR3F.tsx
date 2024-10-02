import { Html, useProgress } from '@react-three/drei';
import Loader from '../loader/loader';

export default function LoaderR3F() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return (
    <Html center>
      {/* <Loader progress={progress} /> */}
      <Loader />
    </Html>
  );
}
