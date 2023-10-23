import {RoutePathname} from 'src/constants';
import {Button} from './button';


export function PlayButton() {
  return (
    <Button
      className="btn--play"
      to={`/${RoutePathname.PLAYER}`}
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </Button>
  );
}