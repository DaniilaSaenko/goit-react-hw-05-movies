import image from './funny-404-page.jpg';
import { Wrapper } from './NotFound.styled';
import Notification from '../../components/Notification/Notification';

export const NotFound = () => {
  return (
    <Wrapper style={{ textAlign: 'center' }}>
      <Notification eventColor="red">Sorry, we couldn't find that page :(</Notification>
      <img src={image} alt="not found" style={{ width: 300 }} />
    </Wrapper>
  );
};
