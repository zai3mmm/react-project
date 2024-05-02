import EMOJI from "../constants/Emoji";
import Entry from "./Entry";

import "./emoji.css";

const Emoji = () => {
  function createEntry(emojiTerm) {
    return (
      <Entry
        key={emojiTerm.id}
        emoji={emojiTerm.emoji}
        name={emojiTerm.name}
        description={emojiTerm.meaning}
      />
    );
  }

  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{EMOJI.map(createEntry)}</dl>
    </div>
  );
};

export default Emoji;
