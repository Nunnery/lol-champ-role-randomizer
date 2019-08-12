import React, { useState } from "react";
import PropTypes from "prop-types";

const Roll = ({ roll }) => {
  const [playerName, setPlayerName] = useState("");
  return (
    <div className="column">
      <div className="card">
        <div className="card-content">
          <div className="content">
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Player Name"
                      value={playerName}
                      onChange={event => setPlayerName(event.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Role</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input is-static"
                      type="email"
                      value={roll.role}
                      readOnly
                      tabIndex={-1}
                      data-roll-role={roll.role}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Letter</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input is-static"
                      type="email"
                      value={roll.letter}
                      readOnly
                      tabIndex={-1}
                      data-roll-letter={roll.letter}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Roll.propTypes = {
  roll: PropTypes.shape({
    role: PropTypes.string.isRequired,
    letter: PropTypes.string.isRequired
  })
};

export default Roll;
