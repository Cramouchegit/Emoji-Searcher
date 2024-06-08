import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./EmojiBox.module.css";

const EmojiBox = ({ title, symbol }) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    // Membuat efek animasi ketika emoji di copy menggunakan useEffect
    const timer = setTimeout(() => setSelected(false), 600);
    return () => clearTimeout(timer);
  }, [selected]);

  return (
    <div
      onClick={() => {
        // Menggunakan Navigator Clipboard untuk mengcopy emoji
        navigator.clipboard.writeText(symbol);
        setSelected(true);
      }}
      className={classNames(styles.emojiBox, {
        // Membuat efek animasi ketika emoji di copy ketika di select atau diklik oleh user
        [styles.selected]: selected,
      })}
    >
      <p
        className={styles.emoji}
        dangerouslySetInnerHTML={{ __html: `&#${symbol.codePointAt(0)};` }}
      />

      <p className={styles.emojiText}>{selected ? "Copied!" : title}</p>
    </div>
  );
};

EmojiBox.propTypes = {
  title: PropTypes.string,
  symbol: PropTypes.string,
};

export default EmojiBox;
