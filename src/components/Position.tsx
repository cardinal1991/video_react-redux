import { useDispatch } from 'react-redux';
import { useAppSelector } from '../app/hooks';
import { positionSlice } from '../features/position-slice';

export const Position = () => {

  const { x, y } = useAppSelector(state => state.position);

  const dispatch = useDispatch();

  const moveLeft = () => dispatch(positionSlice.actions.moveLeft());
  const moveRight = () => dispatch(positionSlice.actions.moveRight());
  const moveUp = () => dispatch(positionSlice.actions.moveDown());
  const moveDown = () => dispatch(positionSlice.actions.moveUp());

  const transformValue = `translate(${x * 100}%, ${y * 100}%)`;

  return (
    <section className="position">
      <h2>Position:</h2>

      <div className="position__content">
        <div className="buttons">
          <button onClick={moveUp}>&uarr;</button>

          <div>
            <button onClick={moveLeft}>&larr;</button>
            <strong>{x}:{y}</strong>
            <button onClick={moveRight}>&rarr;</button>
          </div>

          <button onClick={moveDown}>&darr;</button>
        </div>

        <div className="field">
          <div className="track" style={{ transform: transformValue }}>
            {x + y}
          </div>
        </div>
      </div>
    </section>
  );
};