import { Cause, FallbackWrapper, Tips } from './FallBackUI.styled';
import { FallbackIcon } from 'components/Icons';

const FallBackUI = ({ error }) => (
  <FallbackWrapper>
    <FallbackIcon fill="black" width="240px" height="240px" />
    <h1>Aaaah! Sorry, but something went wrong :(</h1>
    <Tips>
      <p>From now on, you may have to use pen and paper.</p>
      <p>But don't worry, you may also refresh the page or try again later.</p>
    </Tips>
    {error && (
      <Cause>
        <summary>Details</summary>
        <code>{error.stack}</code>
      </Cause>
    )}
  </FallbackWrapper>
);

export default FallBackUI;
