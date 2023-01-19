import { Component } from 'react';
import styles from './feedback.scss';
import PropTypes from 'prop-types';

class Feedback extends Component {
  //   static defaultProps = {
  //     type: 'button',
  //   };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <section>
        <h2>Please leave feedback</h2>
        <button>Good</button>
        <button>Neutral</button>
        <button>Bad</button>
      </section>
    );
  }
}
