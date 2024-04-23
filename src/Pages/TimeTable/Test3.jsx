
import { useCurrentDateTime } from './CurrentTimeOfBristolEngland';

const Test3 = () => {
  const { currentDateTimeOfBristol } = useCurrentDateTime();

  return (
    <div>
      <p>Current DateTime of Bristol in Test3: {currentDateTimeOfBristol}</p>
    </div>
  );
};

export default Test3;
