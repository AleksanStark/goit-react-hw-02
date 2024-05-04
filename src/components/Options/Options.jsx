import css from "./Options.module.css";
const Options = ({ total, onLeaveFeedback, onResetTotal }) => {
  return (
    <ul className={css.options_list}>
      <li className={css.options_list_item}>
        <button
          className={css.options_list_button}
          onClick={() => onLeaveFeedback("good")}
        >
          Good
        </button>
      </li>
      <li className={css.options_list_item}>
        <button
          className={css.options_list_button}
          onClick={() => onLeaveFeedback("neutral")}
        >
          Neutral
        </button>
      </li>
      <li className={css.options_list_item}>
        <button
          className={css.options_list_button}
          onClick={() => onLeaveFeedback("bad")}
        >
          Bad
        </button>
      </li>
      {total > 0 && (
        <li className={css.options_list_item}>
          <button className={css.options_list_button} onClick={onResetTotal}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};
export default Options;
